import { useNavigate } from "react-router-dom";
import {
  addToCartApiService,
  getCartApiService,
  mergeCartApiService,
} from "../api/api.services";
import { clearCart, getCart } from "./cardUtils";

export const mapApiCartToLocal = (apiCart: any[]) => {
  return apiCart.map((item) => ({
    id: item.id,

    qty: item.quantity,

    price: Number(item.price_snapshot),

    name: item.tyre?.tyreModel?.model_name || "",

    image: item.tyre?.tyreModel?.images?.[0]?.image_url || "",

    tyreSize: item.tyre?.tyreSize?.size_label || "",

    // optional extras
    brand: item.tyre?.tyreModel?.brand?.vendor_name || "",
    brandLogo: item.tyre?.tyreModel?.brand?.logo || "",
  }));
};

interface syncCartAfterLoginType {
  localCart: any;
  mergeCartRequest: any;
  getCartRequest: any;
  setCart: any;
}

export const syncCartAfterLogin = async ({
  localCart,
  mergeCartRequest,
  getCartRequest,
  setCart,
}: syncCartAfterLoginType) => {
  if (!localCart || localCart.length === 0) return;

  try {
    const body = {
      items: localCart.map((item: any) => ({
        tyre_id: item.id,
        warehouse_id: item.wareHouseId,
        quantity: item.qty,
      })),
    };

    await mergeCartApiService(mergeCartRequest, body);

    clearCart();

    const res = await getCartApiService(getCartRequest);

    setCart(mapApiCartToLocal(res.data));
  } catch (err) {
    console.error("Cart sync failed", err);
  }
};
