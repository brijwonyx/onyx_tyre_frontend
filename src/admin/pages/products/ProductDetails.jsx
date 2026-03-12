// import { CircleCheck, CirclePlus, Cross, Pencil, Plus } from "lucide-react";
// import ActionDropdown from "../../components/common/ActionDropdown";
import Badge from "../../components/common/Badge";
import ContentCard from "../../components/common/ContentCard";
import DataTable from "../../components/common/DataTable";
import InfoRow from "../../components/common/InfoRow";
import PageHeader from "../../components/common/PageHeader";
// import TableFilters from "../../components/common/TableFilter";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import useMainProductController from "./main-product-controller";

export default function ProductDetails() {
  const navigate = useNavigate();
  // const [editingOrganize, setEditingOrganize] = useState(false);
  // const [editingAttributes, setEditingAttributes] = useState(false);
  const location = useLocation();

  const { fetchVarients, varientData, brandValueData, fetchBrandById } = useMainProductController({brandId:location.state})
  const product = {
    name: "Michelin Pilot Sport 4",
    status: "Published",
    brand: "Bridge Stone",
    description: "abc xyz",
    slug: "/pirelli-pzero",
    onSale: "Yes",
  };

  const getVariantData = () => {
    if(varientData){
      console.log(varientData,'varientDatavarientData')
      const data = varientData?.map((item)=>({
        ...item,
        sku:item?.size_label.replace('/','') + item?.load_index + item?.speed_rating?.toUpperCase(),
        inventory:`${item?.total_tyres} available at ${item?.warehouse_count} location`
      }))

      return data;
    }

    return [];
  }

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const variantData = useMemo(()=>getVariantData(),[varientData])

  console.log(variantData,'varientData')

  const variantsColumns = [
    { key: "size_label", label: "Tire Size" },
    { key: "sku", label: "SKU" },
    { key: "inventory", label: "Inventory" },
  ];

  // const variantsData = [
  //   {
  //     size: "205/55R16",
  //     sku: "MB-501",
  //     inventory: "256 available at 7 location",
  //   },
  //   {
  //     size: "225/45R17",
  //     sku: "MB-502",
  //     inventory: "482 available at 5 location",
  //   },
  // ];
  const VariantActions = [
    {
      key: "view",
      label: "View",
      onClick: (row) => {
        navigate(`variant`, {state: row.id});
      },
    },
    {
      key: "delete",
      label: "Delete",
      variant: "danger",
      onClick: (row) => {
        console.log("Delete product:", row.id);
      },
    },
  ];

  // const editActions = [
  //   {
  //     key: "edit",
  //     label: "Edit",
  //     onClick: () => setEditingOrganize(true),
  //   },
  // ];

  useEffect(() => {
    fetchVarients()
    
  }, [])

  useEffect(()=>{
  if(location.state){
  fetchBrandById()
  }
  },[location.state])

  return (
    <>
      <PageHeader title="Products" />
      <div className=" grid grid-cols-3 gap-[10px] px-[10px]">
        {/* LEFT SIDE */}
        <div className="col-span-2">
          {/* Product Info */}
          <ContentCard>
            <div className="flex justify-between items-center py-4 px-6">
              <h2 className="text-base font-medium">{brandValueData?.vendor_name}</h2>
              <div className="flex gap-2 items-center">
                <Badge variant="success">Published</Badge>
                {/* <ActionDropdown /> */}
              </div>
            </div>

            <InfoRow label="Brand" value={brandValueData?.vendor_name} />
            <InfoRow label="Description" value={'-'} />
            <InfoRow label="Slug" value={`/${brandValueData?.vendor_name?.toLowerCase()}`} />
            <InfoRow label="On Sale" value={product.onSale} />
          </ContentCard>

          {/* Media */}
          <ContentCard title="Media">
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Media</h2>
            </div>
            <div className="flex gap-3 p-3">
              {brandValueData?.images?.map((item) => (
            <img src={item?.image_url} alt="logo" style={{ width: 60, height: 60, objectFit: "contain" }} />
              ))}
            </div>
          </ContentCard>

          {/* Variants */}
          <ContentCard title="Variants">
            <div className="flex justify-between p-3 border-b border-[#E4E4E7]">
              <div className="flex gap-2">
                <h2 className="text-base font-medium">Variants</h2>
              </div>

              {/* <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]">
                  <Plus size={16} />
                  Edit Stock Levels
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]">
                  <Plus size={16} />
                  Edit Prices
                </button>

                <button className="bg-black text-white text-sm px-2 py-1 rounded-md flex items-center gap-2 shadow-[0_0_0_1px_#18181B,0_1px_2px_0px_#00000066,0_0.75px_0px_0px_#FFFFFF33_inset]">
                  Create variant
                </button>
              </div> */}
            </div>
            {/* <TableFilters
              filters={[{ label: "Created" }, { label: "Inventory" }]}
            /> */}
            <DataTable
              columns={variantsColumns}
              data={variantData}
              actions={VariantActions}
            />
          </ContentCard>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Organize */}
          {/* <ContentCard title="">
            <div className="p-3 border-b border-[#E4E4E7] flex justify-between items-center">
              <h2 className="text-base font-medium">Organize</h2>
              <div>
                {!editingOrganize ? (
                  <Pencil
                    size={16}
                    className="cursor-pointer"
                    onClick={() => setEditingOrganize(true)}
                  />
                ) : (
                  <div className="flex gap-2 text-xs">
                    <button onClick={() => setEditingOrganize(false)}>
                      <CirclePlus color="#971717" size={16} className="rotate-45" />
                    </button>
                    <button className="primary "><CircleCheck size={16} /></button>
                  </div>
                )}
              </div>
            </div>
            <InfoRow label="Tags" value="-" editing={editingOrganize} />
            <InfoRow label="Type" value="-" editing={editingOrganize} />
            <InfoRow label="Collection" value="-" editing={editingOrganize} />
            <InfoRow label="Categories" value="-" editing={editingOrganize} />
          </ContentCard> */}

          {/* Attributes */}
          {/* <ContentCard title="">
            <div className="p-3 border-b border-[#E4E4E7] flex justify-between items-center">
              <h2 className="text-base font-medium">Attributes</h2>
              <div>
                {!editingAttributes ? (
                  <Pencil
                    size={16}
                    className="cursor-pointer"
                    onClick={() => setEditingAttributes(true)}
                  />
                ) : (
                  <div className="flex gap-2 text-xs">
                    <button onClick={() => setEditingAttributes(false)}>
                      <CirclePlus color="#971717" size={16} className="rotate-45" />
                    </button>
                    <button className="primary "><CircleCheck size={16} /></button>
                  </div>
                )}
              </div>
            </div>
            <InfoRow label="Length" value="-" editing={editingAttributes} />
            <InfoRow label="MID code" value="-" editing={editingAttributes} />
            <InfoRow label="HS code" value="-" editing={editingAttributes} />
            <InfoRow label="Country of origin" value="-" editing={editingAttributes} />
          </ContentCard> */}
        </div>
      </div>
    </>
  );
}
