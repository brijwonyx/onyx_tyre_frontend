import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { getCart, saveCart } from "../utils/cardUtils";
import { getAccessToken } from "../utils/cookiesManager";
import CallApi from "../Common-Controller/controller";
import { addToCartApiService } from "../api/api.services";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
  tyreSize: string;
  wareHouseId: string;
  stock: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => getCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCartAction = CallApi();

  // // Add to cart (FIXED - IMMUTABLE)
  // const addToCart = (item: CartItem) => {
  //   setCart((prev) => {
  //     const existingItem = prev.find((i) => i.id === item.id);

  //     if (existingItem) {
  //       return prev.map((i) =>
  //         i.id === item.id ? { ...i, qty: i.qty + item.qty } : i,
  //       );
  //     }

  //     return [...prev, item];
  //   });
  // };

  // const addToCart = (item: CartItem) => {
  //   setCart((prev) => {
  //     const stock = item.stock ?? 0;
  //     const incomingQty = item.qty ?? 1;

  //     const existingItem = prev.find((i) => i.id === item.id);

  //     // Out of stock
  //     if (stock <= 0) {
  //       alert("Out of stock");
  //       return prev;
  //     }

  //     if (existingItem) {
  //       const totalQty = existingItem.qty + incomingQty;

  //       // Cap to stock
  //       const finalQty = Math.min(totalQty, stock);

  //       return prev.map((i) =>
  //         i.id === item.id ? { ...i, qty: finalQty } : i,
  //       );
  //     }

  //     // New item → also cap
  //     const finalQty = Math.min(incomingQty, stock);

  //     return [...prev, { ...item, qty: finalQty }];
  //   });
  // };

  // final with token

  const addToCart = async (item: CartItem) => {
    const isLoggedIn = getAccessToken();

    const stock = item.stock ?? 0;
    const incomingQty = item.qty ?? 1;

    // Out of stock (global check)
    if (stock <= 0) {
      alert("Out of stock");
      return;
    }

    // If logged in → API flow
    if (isLoggedIn) {
      try {
        const finalQty = Math.min(incomingQty, stock);

        const body = {
          tyre_id: item.id,
          quantity: finalQty,
          warehouse_id: item.wareHouseId,
        };

        const cartRes = await addToCartApiService(
          addToCartAction.request,
          body,
        );

        // Optional: sync UI (recommended)
        setCart((prev) => {
          const existingItem = prev.find((i) => i.id === item.id);

          if (existingItem) {
            const totalQty = existingItem.qty + finalQty;
            const updatedQty = Math.min(totalQty, stock);

            return prev.map((i) =>
              i.id === item.id ? { ...i, qty: updatedQty } : i,
            );
          }

          return [...prev, { ...item, qty: finalQty }];
        });
      } catch (err) {
        console.error("Add to cart API failed", err);
      }

      return;
    }

    // Guest → local cart (your original logic)
    setCart((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);

      if (existingItem) {
        const totalQty = existingItem.qty + incomingQty;
        const finalQty = Math.min(totalQty, stock);

        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: finalQty } : i,
        );
      }

      const finalQty = Math.min(incomingQty, stock);
      return [...prev, { ...item, qty: finalQty }];
    });
  };

  // Remove item
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQty = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item,
      ),
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  //  Total values
  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.qty, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
