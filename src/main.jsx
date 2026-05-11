import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/cardContext.js";
import App from "./App.jsx";
import "./Styles/index.css";
import { TyreProvider } from "./context/tyreContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <TyreProvider>
        <App />
      </TyreProvider>
    </CartProvider>
  </StrictMode>,
);
