import { Outlet, NavLink } from "react-router-dom";

const menu = [
  { label: "Order History", path: "orders" },
  { label: "Saved Vehicle", path: "vehicles" },
  { label: "Saved Address", path: "addresses" },
  { label: "Saved Item", path: "saved" },
  { label: "Account Settings", path: "settings" },
  { label: "Rating & Review", path: "ratings" },
];

const AccountLayout = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div>
        <h2 className="text-xl font-bold mb-6">My Account</h2>
        <p>Manage your orders, vehicles, and account settings</p>
      </div>
      <div className="flex gap-10 mt-10">
        {/* SIDEBAR */}
        <div className="w-64 border-r pr-6">
          <div className="flex flex-col gap-4">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium ${isActive ? "text-green-700" : "text-gray-500"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
