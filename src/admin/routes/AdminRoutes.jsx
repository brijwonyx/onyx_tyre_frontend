import { Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Orders from "../pages/orders/Orders";
import OrderView from "../pages/orders/OrderView";
import Customers from "../pages/customers/Customers";

const AdminRoutes = (
    <Route path="/admin" element={<AdminLayout />}>
        <Route index path="/admin/orders" element={<Orders />} />
        <Route path="/admin/orders/view" element={<OrderView />} />
        <Route path="/admin/customers" element={<Customers />} />
    </Route>
)
export default AdminRoutes  