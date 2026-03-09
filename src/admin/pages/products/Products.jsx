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
import Toggle from "../../components/common/Toggle";
import useMainProductController from "./main-product-controller";

const Products = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { brandData } = useMainProductController()

  const productsTableData = {

    columns: [
      // {
      //   key: "product",
      //   label: "Product",
      //   type: "text",
      // },
      {
        key: "vendor_name",
        label: "Brand",
        type: "text",
      },
      {
        key: "logo",
        label: "Brand Logo",
        render: (row) => (
          <img src={row.logo} alt="logo"
            style={{ width: 40, height: 40, objectFit: "contain" }} />
        )
      },
      {
        key: "total_variants",
        label: "Stock",
        type: "text",
      },
      // {
      //   key: "id",
      //   label: "WareHouse",
      //   type: "badgeNumber",
      //   suffix: "variants",
      // },
      {
        key: "coo",
        label: "COO",
        type: "text",
      },
      {
        key: "production_flag",
        label: "Status",
        type: "text",
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
        console.log(row)
        navigate(`view`, {state: row.id});
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
      <div className="px-[10px]">
        <ContentCard>
          <PageHeader2
            title="Products"
            buttonLabel="Create Product"
            onClick={() => setOpen(true)}
          />
          {/* <OrdersFilters /> */}
          <TableFilters
            filters={[{ label: "Updated" }, { label: "Created" }]}
          />
          <DataTable
            columns={productsTableData.columns}
            data={brandData}
            actions={productActions}
            pagination={productsTableData.pagination}
          />
          {/* <OrdersTable /> */}
        </ContentCard>
      </div>
      <CreateProductModal open={open} setOpen={setOpen} />
    </>
  );
};
export default Products;
