import { Link } from "react-router-dom";


const TopBar = () => {
  return (
    <div className="bg-primary text-white py-4 ">
      <div className="container mx-auto px-16 flex items-center justify-end">
        <div className="flex items-center gap-6">
          {/* <Link to="/" className="topbar-link text-sm">
            Order Tracking
          </Link> */}

          <Link to="/" className="topbar-link text-sm">
            Customer Support
          </Link>

          <a className="text-sm font-medium">
            073-521-6815
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
