import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";

const AdminLayout = ()=>{
    return (
        <div className="flex h-screen bg-[#FAFAFA] overflow-hidden font-inter">
            <Sidebar/>
            <main className="flex-1 overflow-y-auto">
                <Outlet/>
            </main>

        </div>
    )
}
export default AdminLayout;