import { useState } from "react";
import SearchSideTabs from "./SearchSideTabs";
import SearchTabs from "./SearchTabs";
import SearchForm from "./SearchForm";

const SearchPanel = () => {
    const [activeTab,setActiveTab] = useState("tyres");
    const [activeSideTab,setActiveSideTab] = useState("vehicle")
  return(
  <div className="max-w-[1040px] sp">
    <SearchTabs activeTab={activeTab} onTabChange={setActiveTab}/>
    <div className="flex gap-[30px] p-10">
        <SearchSideTabs activeSideTab={activeSideTab} onSideTabChange={setActiveSideTab}/>
        <SearchForm type={activeTab} method={activeSideTab}/>
    </div>
  </div>
)
};
export default SearchPanel;
