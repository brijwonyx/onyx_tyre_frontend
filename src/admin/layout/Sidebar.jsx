import { NavLink } from "react-router-dom";
import Icon from "../components/common/Icons";

const Sidebar = () => {
  const navItems = [
    { label: "Orders", to: "/admin/orders", icon: "orders" },
    { label: "Products", to: "/admin", icon: "products", disabled: true },
    { label: "Inventory", to: "/admin", icon: "inventory", disabled: true },
    { label: "Customers", to: "/admin/customers", icon: "customers" },
    { label: "Promotions", to: "/admin", icon: "promotion", disabled: true },
    { label: "Price Lists", to: "/admin", icon: "price", disabled: true },
    { label: "Fitment Center", to: "/admin", icon: "fitment", disabled: true },
  ];
  return (
    <aside className="w-60 h-screen border-r flex flex-col flex-shrink-0">
      <div className="p-3 border-b border-[var(--Border-primary, #E4E4E7)]">
        <div className="flex items-center gap-2  p-[4px]">
          <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
            O
          </div>
          <h2 className="text-[13px] leading-5 font-medium">Onyx Store</h2>
        </div>
      </div>
      <nav className="flex-1 px-2 py-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded-md text-[13px] text-[#52525B] font-medium 
     ${
       item.disabled
         ? " cursor-not-allowed"
         : isActive
           ? "bg-white shadow-[0_2px_4px_0px_#0000000A,0_1px_2px_-1px_#00000014,0_0px_0px_1px_#00000014]"
           : " hover:bg-white"
     }`
            }
          >
            <Icon name={item.icon} className="w-4 h-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-3 space-y-3">
        <button className="flex items-center gap-2 text-[13px] text-[#52525B] font-medium border-b border-dashed w-full pb-2" >
          <Icon name="setting" className="w-4 h-4" />
          Settings
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
            ST
          </div>
          <div className="text-xs">
            <p className="font-medium">shagun@demo.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
