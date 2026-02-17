import { useNavigate } from "react-router-dom";
import Badge from "../../components/common/Badge";
import ContentCard from "../../components/common/ContentCard";
import PageHeader from "../../components/common/PageHeader";
import ActionDropdown from "../../components/common/ActionDropdown";
import InfoRow from "../../components/common/InfoRow";
import TableFilters from "../../components/common/TableFilter";
import DataTable from "../../components/common/DataTable";
import { Plus } from "lucide-react";
import Drawer from "../../../components/common/Drawer";
import { useState } from "react";
import EditCustomer from "../../components/customers/EditCustomer";
import AddAddress from "../../components/customers/AddAddress";

const CustomerDetails = () => {
  const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState(false);
  
  const ordersColumns = [
    { key: "id", label: "Order #" },
    { key: "date", label: "Date" },
    { key: "customer", label: "Customer" },
    { key: "payment", label: "Payment" },
    { key: "fulfillment", label: "Fulfillment" },
    { key: "items", label: "Items" },
    { key: "total", label: "Total" },
  ];

  const orders = [
    {
      id: "49652",
      date: "Nov 15, 2024",
      customer: "Jane Doe",
      payment: <Badge variant="success">Success</Badge>,
      fulfillment: "shipped",
      items: 5,
      total: "$125.00",
    },
    {
      id: "48573",
      date: "Nov 12, 2024",
      customer: "Mike Lee",
      payment: "success",
      fulfillment: "delivered",
      items: 2,
      total: "$125.00",
    },
  ];
  const editCustomerActions = [
    {
      key: "Edit",
      label: "Edit",
      onClick: ()=>setActiveModal("editCustomer")
    },
  ];

  return (
    <>
      <PageHeader title="Customer" />
      <div className=" grid grid-cols-3 gap-[10px] px-[10px]">
        {/* LEFT SIDE */}
        <div className="col-span-2">
          <ContentCard>
            <div className="flex justify-between items-center py-4 px-6">
              <h2 className="text-base font-medium">shagun@demo.com</h2>
              <div className="flex gap-2 items-center">
                <Badge variant="success">Guest</Badge>
                <ActionDropdown  actions={editCustomerActions}/>
              </div>
            </div>

            <InfoRow label="Name" value="abc xyz" />
            <InfoRow label="Company" value="abc xyz" />
            <InfoRow label="Phone" value="abc xyz" />
          </ContentCard>

          <ContentCard>
            <div className="flex justify-between p-3 border-b border-[#E4E4E7]">
              <div className="flex gap-2">
                <h2 className="text-base font-medium">Orders</h2>
              </div>
            </div>
            <TableFilters
              filters={[{ label: "Payment" }, { label: "Fullfilment" }]}
            />
            <DataTable columns={ordersColumns} data={orders} />
          </ContentCard>
          <ContentCard title="Variants">
            <div className="flex justify-between p-3 border-b border-[#E4E4E7]">
              <div className="flex gap-2">
                <h2 className="text-base font-medium">Customer Groups</h2>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]">
                  Add
                </button>
              </div>
            </div>
            <TableFilters
              filters={[{ label: "Created" }, { label: "Inventory" }]}
            />
            <DataTable columns={ordersColumns} data={orders} />
          </ContentCard>
        </div>

        {/* RIGHT SIDE */}
        <div className="">
          <ContentCard title="">
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Addresses</h2>
              <button onClick={()=>setActiveModal("addAddress")}>Add</button>
            </div>
            <div className="py-4 px-6">
              <div className="bg-[#FAFAFA] shadow-[0_2px_4px_0px_#0000000A,0_1px_2px_-1px_#00000014,0_0px_0px_1px_#00000014] py-2 px-4 flex items-center justify-between ">
                <div className="flex flex-col gap-1">
                  <h6 className="font-medium">Home</h6>
                  <p className="text-[#52525B] text-[13px]">address home </p>
                </div>
                <ActionDropdown />
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
              <Drawer
          open={activeModal === "editCustomer"}
          onClose={() => setActiveModal(null)}
          title="Edit Customers"
        >
         <EditCustomer />   
        </Drawer>
                      <Drawer
          open={activeModal === "addAddress"}
          onClose={() => setActiveModal(null)}
          title="Add Address"
        >
         <AddAddress />   
        </Drawer>
        
    </>
  );
};
export default CustomerDetails;
