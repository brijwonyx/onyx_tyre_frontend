import React, { useMemo, useState } from "react";
import CustomSelect from "../../../../Components/common/forms/CustomSelect";
import Input from "../../../../Components/Common/Forms/Input";
import Dropdown from "../../../../shared/Dropdown";
import TextEditor from "../../common/forms/TextEditor";
import MediaUpload from "../../common/MediaUpload";
import useProductController from "../product-controller";
import FAQList from "./FAQList";

const BasicInfoTab = ({setOpen}) => {
  const { brands,
     models,
      fitments, 
      warehouse,
      onChangeBrandValue,
      onChangeModelValue,
      onChangeFitmentValue,
      onChangeMaster,
      onChangeWhearehouse,
      faqs, 
      setFaqs,
      brandValue,
      modelValue,
      fitmentValue,
      wharehouseValue,
      storeData,
      addProduct
    } = useProductController()

    const [searchByBrandName , setSearchByBrandName] = useState('');
    const [searchByModelName , setSearchByModelName] = useState('');
    const [searchByFitmentName , setSearchByFitmentName] = useState('');
    const [searchByWarehouseName , setSearchByWarehouseName] = useState('');

  const isButtonDisabled = brandValue.vendor_name && fitmentValue.name && modelValue.model_name && storeData.compare_price && storeData.price && storeData.stock && wharehouseValue.length 
  
   const handleBrandFilter = (event) => {
        const { value } = event.target;
        setSearchByBrandName(value);
    };
    
   const handleModelFilter = (event) => {
        const { value } = event.target;
        setSearchByModelName(value);
    };

   const handleFitmentFilter = (event) => {
        const { value } = event.target;
        setSearchByFitmentName(value);
    };
   const handleSearchByWareHouseName = (event) => {
        const { value } = event.target;
        setSearchByWarehouseName(value);
    };

    const filteredBrandName = useMemo(
        () =>
            brands?.filter((admin) =>
                admin?.name.toLowerCase().includes(searchByBrandName.toLowerCase()),
            ),
        [searchByBrandName, brands],
    );

    const filteredModelName = useMemo(
        () =>
            models?.filter((admin) =>
                admin?.model_name.toLowerCase().includes(searchByModelName.toLowerCase()),
            ),
        [searchByModelName, models],
    );
    const filteredFitmentName = useMemo(
        () =>
            fitments?.filter((admin) =>
                admin?.name.toLowerCase().includes(searchByFitmentName.toLowerCase()),
            ),
        [searchByFitmentName, fitments],
    );

    const filteredByWareHouseName = useMemo(
        () =>
            warehouse?.filter((admin) =>
                admin?.name.toLowerCase().includes(searchByWarehouseName.toLowerCase()),
            ),
        [searchByWarehouseName, warehouse],
    );

    (wharehouseValue,'wharehouseValue')


  // (warehouse, "warehouse")
  return (
    <div className="max-w-[1000px] py-6 mx-auto">
      <div>
        <h2 className="font-openSans text-base font-medium border-b border-[#E4E4E7] pb-4">
          General
        </h2>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-3 gap-3">
          {/* <CustomSelect
            label="Brand"
            placeholder="Select Brand"
            options={brands || []}
            value={brandValue.vendor_name}
            onChange={(val) => onChangeBrandValue(val)}
            variant="dark"
          /> */}
          <Dropdown 
          dropDownTitle="Brand"  
          searchFilter={searchByBrandName} 
          label="Select Brand" 
          handleSearch={handleBrandFilter} 
          options={searchByBrandName.length ? filteredBrandName :  brands} 
          selectValue='vendor_name' 
          value={brandValue} 
          onChange={(val) => onChangeBrandValue(val)} 
          />
          {/* <CustomSelect
            label="Model"
            placeholder="Select Model"
            options={models || []}
            value={modelValue.model_name}
            onChange={(val) => onChangeModelValue(val)}
            variant="dark"
          /> */}
          <Dropdown 
          dropDownTitle="Model" 
          label="Select Model" 
          handleSearch={handleModelFilter} 
          searchFilter={searchByModelName}  
          options={searchByModelName?.length ? filteredModelName :models } 
          selectValue='model_name' 
          value={modelValue} 
          onChange={(val) => onChangeModelValue(val)} 
          />
          {/* <CustomSelect
            label="Fitment"
            placeholder="Select Fitment"
            options={fitments || []}
            value={fitmentValue.name}
            onChange={(val) => onChangeFitmentValue(val)}
            variant="dark"
          /> */}
          <Dropdown 
          dropDownTitle="Fitment" 
          searchFilter={searchByFitmentName}  
          label="Select Fitment" 
          handleSearch={handleFitmentFilter} 
          options={searchByFitmentName?.length ? filteredFitmentName :fitments || []} 
          selectValue='name' value={fitmentValue} 
          onChange={(val) => onChangeFitmentValue(val)} 
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Input label="Price" placeholder="Price" variant="dark" type={'number'} onChange={(val) => onChangeMaster('price', val)} />
          <Input
            label="Compare Price"
            placeholder="Compare Price"
            variant="dark"
            type={'number'}
            onChange={(val) => onChangeMaster('compare_price', val)}
          />
          <Input label="Stock" placeholder="Stock" variant="dark" type={'number'} onChange={(val) => onChangeMaster('stock', val)} />
          {/* <CustomSelect
            label="Warehouse"
            placeholder="Select Warehouse"
            options={warehouse || []}
            
            value={wharehouseValue.name}
            onChange={(val) => onChangeWhearehouse(val)}
            variant="dark"
          /> */}
          <Dropdown 
          dropDownTitle="Warehouse" 
          label="Select Warehouse" 
          options={searchByWarehouseName?.length ? filteredByWareHouseName :warehouse} 
          multipleSelection={true}
          selectValue='name' 
          value={wharehouseValue} 
          searchFilter={searchByWarehouseName}
          handleSearch={handleSearchByWareHouseName}
          onChange={(val) => onChangeWhearehouse(val)} 
          />
        </div>
        <div className="w-full">
          <label className="block font-medium text-[13px] text-[#18181B] font-montserrat mb-2">
            Short Description
          </label>
          <div className="relative">
            <textarea
              placeholder="Brief description of tire product..."
              onChange={(e) => onChangeMaster('description', e.target.value)}
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
        <FAQList faqs={faqs} setFaqs={setFaqs} />
      </div>
      <div className="flex flex-shrink-0 justify-end gap-3 mt-6 py-4 px-6 border-t ">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>

              <button disabled ={!isButtonDisabled} onClick={()=>addProduct(setOpen)} className="px-4 py-2 bg-black text-white rounded-md">
                Save
              </button>
            </div>
    </div>
  );
};
export default BasicInfoTab;
