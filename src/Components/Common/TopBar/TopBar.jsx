import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar py-4 ">
      <div className="container mx-auto px-16 flex items-center justify-end">
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="topbar-search text-sm"
            aria-label="Search"
          >
            Search
          </button>
          <Link to="/" className="topbar-link text-sm">
            Order Tracking
          </Link>

          <Link to="/" className="topbar-link text-sm">
            Customer Support
          </Link>

          <a className="text-sm font-medium">
            888-998-0000
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
