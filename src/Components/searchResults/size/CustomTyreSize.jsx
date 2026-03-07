
import CustomSelect from "../../common/forms/CustomSelect";
import NumberField from "../../searchPanel/Common/NumberField";
import warning from "../../../assets/warning.svg"
import Button from "../../common/forms/Button";

const CustomTyreSize = () => {
  return (
    <>
      <div className=" ">
        <h4 className="font-montserrat text-xl font-semibold mb-10">
          Custom Tyre Size
        </h4>
        <div className="flex p-3 bg-[#FFF2E3] gap-3 items-start">
            <img src={warning} alt="Warning" className="mt-1"/>
          <div>
            <h5 className="font-montserrat font-semibold text-base">Warning</h5>
            <p className="font-openSans font-normal text-sm">
              The Custom Tire Size option may show tires outside of the fitment
              range of your selected vehicle. To see results filtered to ensure
              proper fitment, please choose either Factory Tire Size or Optional
              Tire Sizes.
            </p>
          </div>
        </div>
        <div className="py-6 flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <NumberField varient="black" label="Width" />
            <NumberField varient="black" label="Ratio" />
            <NumberField varient="black" label="Diameter" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" className="scale-150" />
            <p className="font-openSans font-normal text-base leading-6 ">
              Add a Different Rear Tire Size
            </p>
          </div>
          <div className="flex gap-4 w-full">
            <NumberField varient="black" label="Width" />
            <NumberField varient="black" label="Ratio" />
            <NumberField varient="black" label="Diameter" />
          </div>
        </div>
        <Button
          solid
          className="w-full"
        >
          find Custom tyre size
        </Button>
      </div>
    </>
  );
};
export default CustomTyreSize;
