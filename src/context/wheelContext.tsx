import React, {
  createContext,
  useContext,
  type ReactNode,
} from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  tyreSize: string;
  wareHouseId: string;
  stock: number;
  brand?: string;
};

type TyreContextType = {
 
};

const TyreContext = createContext<TyreContextType | null>(null);

export const useCart = () => {
  const context = useContext(TyreContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const TyreProvider = ({ children }: { children: ReactNode }) => {

  return (
    <TyreContext.Provider
      value={{
      
      }}
    >
      {children}
    </TyreContext.Provider>
  );
};
