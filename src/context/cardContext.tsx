import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { getCart, saveCart } from "../utils/cardUtils";
import { getAccessToken } from "../utils/cookiesManager";
import { getGuestId } from "../utils/guest";

import CallApi from "../Common-Controller/controller";

import {
  addToCartApiService,
  getCartApiService,
  removeApiService,
} from "../api/api.services";
import toast from "react-hot-toast";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  tyreSize: string;
  wareHouseId: string;
  stock: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementQty: (id: string) => void;
  decrementQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  globalAddingCartLoader: boolean;
  removingWholeItemLoad: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => getCart());

  const addToCartAction = CallApi();
  const getToCartAction = CallApi();
  const removeCartAction = CallApi();

  const [globalAddingCartLoader, setGlobalAddingCartLoader] =
    useState<boolean>(false);

  const [removingWholeItemLoad, setRemovingWholeItemLoad] =
    useState<boolean>(false);

  const mapApiCartToLocal = (apiCart: any) => {
    return apiCart.map((item: any) => {
      const tyre = item.tyre || {};
      const model = tyre.tyreModel || {};

      return {
        id: item.id,

        name: model.model_name || "",

        price: Number(item.price_snapshot) || 0,

        quantity: item.quantity || 1,

        image: model.images?.[0]?.image_url || "",

        tyreSize: tyre.tyreSize?.size_label || "",

        speedRating: tyre.speed_rating,
      };
    });
  };

  // =========================
  //  SYNC CART ON LOAD / REFRESH
  // =========================

  const syncCart = async () => {
    try {
      const res = await getCartApiService(getToCartAction.request);

      const apiRawCart = res?.cart || [];

      const apiCart = mapApiCartToLocal(apiRawCart);
      setCart(apiCart);
      saveCart(apiCart);
      setGlobalAddingCartLoader(false);
    } catch (err) {
      console.error("Cart sync failed", err);
    }
  };

  useEffect(() => {
    syncCart();
  }, []);

  // =========================
  // COMMON DATA
  // =========================
  const getCommon = () => {
    const isLoggedIn = getAccessToken();
    const guestId = getGuestId();
    return { isLoggedIn, guestId };
  };

  // =========================
  // ADD TO CART
  // =========================
  const addToCart = async (item: CartItem) => {
    const { isLoggedIn, guestId } = getCommon();

    if (item.stock <= 0) {
      alert("Out of stock");
      return;
    }

    const qtyToAdd = Math.min(item.quantity ?? 1, item.stock);

    // API
    try {
      setGlobalAddingCartLoader(true);
      const response = await addToCartApiService(addToCartAction.request, {
        tyre_id: item.id,
        quantity: qtyToAdd,
        warehouse_id: item.wareHouseId,
        ...(isLoggedIn ? {} : { guest_id: guestId }),
      });
      if (response?.success) {
        syncCart();
      }
    } catch (err: any) {
      console.error("Add failed", err);

      const errorMessage =
        err?.response?.data?.message || // API error (most useful)
        err?.message || // generic JS error
        "Something went wrong"; // fallback

      toast.error(errorMessage);
    } finally {
      setGlobalAddingCartLoader(false);
    }
  };

  // =========================
  // INCREMENT
  // =========================
  const incrementQty = async (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (!item || item.quantity >= item.stock) return;

    const { isLoggedIn, guestId } = getCommon();

    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );

    try {
      await addToCartApiService(addToCartAction.request, {
        tyre_id: id,
        quantity: 1,
        warehouse_id: item.wareHouseId,
        ...(isLoggedIn ? {} : { guest_id: guestId }),
      });
    } catch (err) {
      console.error("Increment failed", err);
    }
  };

  // =========================
  //  DECREMENT
  // =========================
  const decrementQty = async (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    const { isLoggedIn, guestId } = getCommon();

    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    );

    try {
      await fetch("/api/cart/decrement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tyre_id: id,
          quantity: 1,
          ...(isLoggedIn ? {} : { guest_id: guestId }),
        }),
      });
    } catch (err) {
      console.error("Decrement failed", err);
    }
  };

  // =========================
  // REMOVE
  // =========================
  const removeFromCart = async (id: string) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveCart(updated);
      return updated;
    });

    try {
      setRemovingWholeItemLoad(true);

      const response = await removeApiService(removeCartAction.request, id);

      if (!response?.success) {
        throw new Error("Failed");
      }
      toast.success("Item Removed");
    } catch (err) {
      toast.success("Remove failed");
      console.error("Remove failed", err);

      syncCart();
    } finally {
      setRemovingWholeItemLoad(false);
    }
  };

  // =========================
  // CLEAR
  // =========================
  const clearCart = () => {
    setCart([]);
  };

  // =========================
  //  TOTALS
  // =========================
  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQty,
        decrementQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        globalAddingCartLoader,
        removingWholeItemLoad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
