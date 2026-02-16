import { useState } from "react";
import ContentCard from "../../components/common/ContentCard";
import PageHeader from "../../components/common/PageHeader";
import PageHeader2 from "../../components/common/PageHeader2";
import OrdersFilters from "../../components/orders/OrdersFilters";
import OrdersTable from "../../components/orders/OrdersTable";
import CreateProductModal from "../../components/products/CreateProductModal";
import DataTable from "../../components/common/DataTable";
import TableFilters from "../../components/common/TableFilter";

const Products = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
      <PageHeader title="Products" />
      <ContentCard>
        <PageHeader2 title="Products" buttonLabel="Create Product" onClick={() => setOpen(true)} />
        <OrdersFilters />
        {/* <TableFilters  />  */}
        {/* <DataTable /> */}
        <OrdersTable />
      </ContentCard>
      <CreateProductModal open={open} setOpen={setOpen} />
    </>
  );
};
export default Products;
