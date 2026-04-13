// utils/cartStorage.ts

const CART_KEY = "tyre_cart";
const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const setWithExpiry = (key: string, value: any, ttl: number) => {
  const item = {
    value,
    expiry: Date.now() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);

  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};

// Cart-specific helpers
export const getCart = () => getWithExpiry(CART_KEY) || [];

export const saveCart = (cart: any[]) => {
  setWithExpiry(CART_KEY, cart, ONE_YEAR);
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
