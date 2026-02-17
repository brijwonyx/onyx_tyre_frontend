import ContentCard from "../../components/common/ContentCard";
import OrdersFilters from "../../components/orders/OrdersFilters";
import OrdersTable from "../../components/orders/OrdersTable";
import PageHeader from "../../components/common/PageHeader";
import PageHeader2 from "../../components/common/PageHeader2";
import TableFilters from "../../components/common/TableFilter";
import DataTable from "../../components/common/DataTable";
import Badge from "../../components/common/Badge";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
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
  const orderActions = [
  {
    key: "view",
    label: "View",
    onClick: (row) => {

      navigate(`view`)
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
  return (
    <>
      <PageHeader title="Orders" />
      <div className="px-[10px]">
        <ContentCard>
          <PageHeader2 title="Orders" />
          <TableFilters filters={[{label:"Payment"},{label:"Fullfilment"},{label:"Created"}]} />
          <DataTable columns={ordersColumns} data={orders} actions={orderActions}/>
        </ContentCard>
      </div>
    </>
  );
};
export default Orders;
