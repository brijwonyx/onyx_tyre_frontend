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

const Products = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const productsTableData = {
    columns: [
      // {
      //   key: "product",
      //   label: "Product",
      //   type: "text",
      // },
      {
        key: "brand",
        label: "Brand",
        type: "text",
      },
      {
        key: "brandLogo",
        label: "Brand Logo",
        type: "text",
      },
      {
        key: "stock",
        label: "Stock",
        type: "text",
      },
      {
        key: "warehouse",
        label: "WareHouse",
        type: "badgeNumber",
        suffix: "variants",
      },
      {
        key: "coo",
        label: "COO",
        type: "text",
      },
      {
        key: "status",
        label: "Status",
        type: "text",
      },
    ],

    rows: [
      {
        id: 1,
        brand: "Michelin",
        brandLogo: "",
        stock: "5",
        warehouse: "",
        coo: "",
        status: <Toggle enabled={false} onChange={() => {}} />,
      },
      {
        id: 2,
        brand: "Bridgestone",
        brandLogo: "",
        stock: "9",
        warehouse: "",
        coo: "",
        status: <Toggle enabled={true} onChange={() => {}} />,
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
        navigate(`view`);
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
            data={productsTableData.rows}
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
