import CustomSelect from "../../../../components/common/forms/CustomSelect";
import Toggle from "../../common/Toggle";

const CategoriesTab = () => {
  return (
    <div className="max-w-[800px] py-6 mx-auto">
      <div>
        <h2 className="font-openSans text-base font-medium border-b border-[#E4E4E7] pb-4">
          General
        </h2>
      </div>
      <div className="border border-[#E5E7EB] rounded-lg py-3 px-2 flex items-start gap-3 my-6">
        <Toggle enabled={false} onChange={() => {}} />
            <div className="text-[#18181B] font-openSans font-normal text-sm">
                <h6 className="mb-1">Discountable <span className="text-[#A1A1AA]">(Optional)</span></h6>
                <p className="text-[#52525B]">When unchecked, discounts will not be applied to this product</p>
            </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <CustomSelect
            label="Product Type"
            placeholder="Product Type"
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <CustomSelect
              label="Category "
              placeholder="Category "
              options={["Option 1", "Option 2", "Option 3"]}
              value={""}
              onChange={""}
              variant="dark"
            />
            <span className="font-openSans font-normal text-sm text-[#A1A1AA]">
              Vehicle category this tyre fits
            </span>
          </div>
          <div>
            <CustomSelect
              label="Tyre Type"
              placeholder="Tyre Type"
              options={["Option 1", "Option 2", "Option 3"]}
              value={""}
              onChange={""}
              variant="dark"
            />
            <span className="font-openSans font-normal text-sm text-[#A1A1AA]">
              The primary tyre classification
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <CustomSelect
            label="Season "
            placeholder="Season "
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />{" "}
          <CustomSelect
            label="Collection"
            placeholder="Collection"
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <CustomSelect
            label="Tags"
            placeholder="Tags"
            options={["Option 1", "Option 2", "Option 3"]}
            value={""}
            onChange={""}
            variant="dark"
          />
        </div>
      </div>
    </div>
  );
};
export default CategoriesTab;
