import CustomSelect from "../../../../Components/common/forms/CustomSelect";
import Input from "../../../../Components/Common/Forms/Input";
import TextEditor from "../../common/forms/TextEditor";
import MediaUpload from "../../common/MediaUpload";
import useProductController from "../product-controller";
import FAQList from "./FAQList";

const BasicInfoTab = () => {
  const {brand} = useProductController()
  return (
    <div className="max-w-[800px] py-6 mx-auto">
      <div>
        <h2 className="font-openSans text-base font-medium border-b border-[#E4E4E7] pb-4">
          General
        </h2>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-3 gap-3">
          <CustomSelect
            label="Brand"
            placeholder="Select Brand"
            options={brand || []}
            value={""}
            onChange={""}
            variant="dark"
          />
          <CustomSelect
            label="Model"
            placeholder="Select Model"
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />
          <CustomSelect
            label="Fitment"
            placeholder="Select Fitment"
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Input label="Price" placeholder="Price" variant="dark" />
          <Input
            label="Compare Price"
            placeholder="Compare Price"
            variant="dark"
          />
          <Input label="Stock" placeholder="Stock" variant="dark" />
          <CustomSelect
            label="Warehouse"
            placeholder="Select Warehouse"
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />
        </div>
        <div className="w-full">
          <label className="block font-medium text-[13px] text-[#18181B] font-montserrat mb-2">
            Short Description
          </label>
          <div className="relative">
            <textarea
              placeholder="Brief description of tire product..."
              className="box-shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] bg-[#FAFAFA] w-full min-h-[120px] rounded-md border border-gray-300 p-3 pr-8 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
            />
          </div>
        </div>
        <MediaUpload />
        <div>
          <h2 className="font-openSans text-base font-medium border-b border-[#E4E4E7] pb-4">
            Product Details
          </h2>
        </div>
        {/* <TextEditor label={"Tyre Overview"} /> */}
        {/* <TextEditor label={"Features"} /> */}
        <TextEditor label={"Warranty Information"} />
        {/* <TextEditor label={"Tyre Spec Sheet"} /> */}
        <FAQList />
      </div>
    </div>
  );
};
export default BasicInfoTab;
