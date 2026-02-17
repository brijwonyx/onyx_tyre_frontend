import { useState } from "react";
import ContentCard from "../../components/common/ContentCard";
import PageHeader from "../../components/common/PageHeader";
import PageHeader2 from "../../components/common/PageHeader2";
import OrdersFilters from "../../components/orders/OrdersFilters";
import OrdersTable from "../../components/orders/OrdersTable";
import CreateProductModal from "../../components/products/CreateProductModal";
import DataTable from "../../components/common/DataTable";
import TableFilters from "../../components/common/TableFilter";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const productsTableData = {
    columns: [
      {
        key: "product",
        label: "Product",
        type: "text",
      },
      {
        key: "brand",
        label: "Brand",
        type: "text",
      },
      {
        key: "collection",
        label: "Collection",
        type: "text",
      },
      {
        key: "variants",
        label: "Variants",
        type: "badgeNumber",
        suffix: "variants",
      },
      {
        key: "status",
        label: "Status",
        type: "statusBadge",
      },
    ],

    rows: [
      {
        id: 1,
        product: "Michelin Pilot Sport 4",
        brand: "Michelin",
        collection: "-",
        variants: 3,
        status: "Inactive",
      },
      {
        id: 2,
        product: "Bridgestone Turanza T005",
        brand: "Bridgestone",
        collection: "-",
        variants: 2,
        status: "Active",
      },
    ],

    pagination: {
      page: 1,
      perPage: 5,
      total: 5,
      totalPages: 1,
    },
  };
  const productActions = [
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
      <PageHeader title="Products" />
      <ContentCard>
        <PageHeader2
          title="Products"
          buttonLabel="Create Product"
          onClick={() => setOpen(true)}
        />
        {/* <OrdersFilters /> */}
        <TableFilters
          filters={[
            {  label: "Updated" },
            { label: "Created" },
          ]}
        />
        <DataTable
          columns={productsTableData.columns}
          data={productsTableData.rows}
          actions={productActions}
          pagination={productsTableData.pagination}
        />
        {/* <OrdersTable /> */}
      </ContentCard>
      <CreateProductModal open={open} setOpen={setOpen} />
    </>
  );
};
export default Products;
