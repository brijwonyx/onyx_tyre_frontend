import { Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Orders from "../pages/orders/Orders";
import OrderView from "../pages/orders/OrderView";
import Customers from "../pages/customers/Customers";
import Products from "../pages/products/Products";

const AdminRoutes = (
    <Route path="/admin" element={<AdminLayout />}>
        <Route index path="/admin/orders" element={<Orders />} />
        <Route path="/admin/orders/view" element={<OrderView />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/products" element={<Products />} />
    </Route>
)
export default AdminRoutes  