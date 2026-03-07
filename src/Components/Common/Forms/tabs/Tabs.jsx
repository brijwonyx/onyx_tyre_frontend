import { useState } from "react";
import TabNotch from "./TabNotch";

const Tabs = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      
      {/* TAB HEADER */}
      <div className="relative border-t border-gray-300 overflow-visible">
        
        <div className="flex gap-12 pt-6 items-end">
          {tabs.map((tab, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={tab.label}
                onClick={() => setActiveIndex(index)}
                className="relative pb-2"
              >
                <span
                  className={`text-base font-medium whitespace-nowrap transition-colors pt-6 font-openSans
                  ${active ? "text-primary" : "text-black"}
                  `}
                >
                  {tab.label}
                </span>

                {/* ACTIVE UI */}
                {active && (
                  <>
                    {/* TOP BORDER HIGHLIGHT */}
                    {/* <div className="absolute left-0 -top-[34px] w-full h-[2px] bg-green-700" /> */}

                    {/* NOTCH */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-[25px] text-[#2E7D32] z-10">
                      <TabNotch className="w-[58px]" />
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="mt-10">
        {tabs[activeIndex].content}
      </div>

    </div>
  );
};

export default Tabs;
