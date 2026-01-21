import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
const Header = () =>{
    return (
        <>
        <div className="header py-2 px-6">
            <div className="container flex gap-6 items-center">
                <div className="logo w-[10%]">
                <img src={logo} className=""/>

                </div>
                <div className="flex gap-6 text-sm">
                    <Link to="/">Tyres</Link>
                    <Link to="/">Tyre Brands</Link>
                    <Link to="/">Wheels</Link>
                    <Link to="/">Deals</Link>
                    <Link to="/">Delivery & Installation</Link>
                </div>
            </div>
        </div>

        </>
    )
}
export default Header;