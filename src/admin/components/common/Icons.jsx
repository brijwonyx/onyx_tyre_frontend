import Order from "../../assets/order.svg";
import Customer from "../../assets/customers.svg";
import Search from "../../assets/search.svg";
import Copy from "../../assets/copy.svg";
import Dots from "../../assets/3dots.svg";
import Add from "../../assets/add.svg";
import Filter from "../../assets/filter.svg";
import Fitment from "../../assets/fitment.svg";
import Inventory from "../../assets/inventory.svg";
import Notification from "../../assets/notification.svg";
import Price from "../../assets/price.svg";
import Products from "../../assets/products.svg";
import Promotion from "../../assets/promotions.svg";
import Setting from "../../assets/setting.svg";
import Sidebar from "../../assets/sidebar.svg";

const ICONS = {
  orders: Order,
  customers: Customer,
  search: Search,
  copy: Copy,
  dots: Dots,
  add: Add,
  filter: Filter,
  fitment: Fitment,
  inventory: Inventory,
  notification: Notification,
  price: Price,
  products: Products,
  promotion: Promotion,
  setting: Setting,
  sidebar: Sidebar,
};

const Icon = ({ name, className = "w-4 h-4", alt = "" }) => {
  const src = ICONS[name];
  if (!src) return null;

  return <img src={src} alt={alt || name} className={className} />;
};

export default Icon;
    