import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MegaMenu = ({ menu }) => {
  return (
    <div className="bg-white shadow-xl border border-[#E1E3E5]">
      {/* CONTENT */}
      <div className="p-6">
        <div
          className={`grid ${
            menu.columns.length === 2
              ? "gap-4"
              : "gap-[72px]"
          }`}
          style={{
            gridTemplateColumns: `repeat(${menu.columns.length}, 1fr)`,
          }}
        >
          {/* {menu.columns.map((col) => (
            <div key={col.title}> */}
          {menu.columns.map((col, index) => (
            <div
              key={col.title}
              className={menu.columns.length === 2 && index === 1 ? "border-l border-gray-200 pl-5" : ""}
            >
              <h3 className="font-bold text-base border-b border-[#E1E3E5] pb-2 font-montserrat py-3 w-fit">
                {col.title}
              </h3>

              {/* LINKS */}
              {col.links && (
                // <ul className="font-openSans font-regular text-base flex flex-col gap-6 mt-6">
                //   {col.links.map((link) => (
                //     <Link
                //       key={link.label}
                //       to={link.path}
                //       className="hover:text-green-700 cursor-pointer transition"
                //     >
                //       {link.label}
                //     </Link>
                //   ))}
                // </ul>
                <div
                  className={`font-openSans font-regular text-base ${
                    col.layout === "grid"
                      ? "grid grid-cols-3 gap-[72px] gap-y-6 mt-6"
                      : "flex flex-col gap-6 mt-6"
                  }`}
                >
                  {col.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block hover:text-green-700 transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* LOGOS */}
              {col.logos && (
                <div className="grid grid-cols-3 gap-4 items-center mt-6">
                  {col.logos.map((logo) => (
                    <Link key={logo.path} to={logo.path} className="mx-auto">
                      <img
                        src={logo.img}
                        className="h-9  object-contain hover:scale-105 transition"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t px-6 py-3 flex justify-between items-center bg-[#F5F5F5] font-montserrat text-base font-medium">
        <div className="flex gap-3 text-sm">
          <span>🚚 Free Delivery</span>
          <span>🛡️ Quality Guaranteed</span>
        </div>

        <Link
          to={menu.footer.path}
          className="text-green-700 font-semibold hover:underline flex gap-3 items-center"
        >
          {menu.footer.label} <ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;
