import { Outlet } from "react-router-dom";
import TopBar from "./Components/Common/TopBar/topbar";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";

const Layout = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Outlet/>
            <Footer />
        </>
    );
}
export default Layout;