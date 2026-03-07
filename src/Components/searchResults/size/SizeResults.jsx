import Tabs from "../../common/Forms/tabs/Tabs";
import ContextBar from "../../common/layout/ContextBar";
import FactoryTireSize from "./FactoryTireSize";
import tyreSize from "../../../assets/search-size.png"
import OptionalTyreSize from "./OptionalTyreSize";
import CustomTyreSize from "./CustomTyreSize";
import FindTyreBanner from "../../common/FindTyreBanner";

const SizeResults = () => {
  const tab = [
    {
      label: "Factory Tyre Size",
      content: <FactoryTireSize />,
    },
    {
      label: "Optional Tyre Sizes",
      content: <OptionalTyreSize/>,
    },
    {
      label: "Custom Tyre Size",
      content: <CustomTyreSize/>,
    },
  ];
  return (
    <>
      <section>
        <ContextBar
          breadCrumbs="See all tire sizes for:"
          children="2024 ford mustang dark horse"
        />
        <div className="py-10 px-16">
          <div className="mb-10">
            <h4 className="font-montserrat font-semibold text-2xl">
              Confirm your tire size
            </h4>
            <p className="font-openSans font-normal text-base">
              Your vehicle can come equipped with more than one possible size
              during production.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <Tabs tabs={tab} />
            </div>
            <div>
              <h5>How to choose the correct size?</h5>
              <p>
                If you are unsure what size is installed on the vehicle please
                check the size as listed on the tire sidewall.
              </p>
              <img src={tyreSize} alt="Tyre" className=""/>
            </div>
          </div>
        </div>
        <FindTyreBanner/>
      </section>
    </>
  );
};

export default SizeResults;
