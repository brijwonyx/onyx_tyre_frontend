import { useNavigate } from "react-router-dom";
import ContentCard from "../../components/common/ContentCard";
import DataTable from "../../components/common/DataTable";
import PageHeader from "../../components/common/PageHeader";
import PageHeader2 from "../../components/common/PageHeader2";
import TableFilters from "../../components/common/TableFilter";
import CustomerFilters from "../../components/customers/CustomerFilters";
import CustomersList from "../../components/customers/CustomersList";
import Badge from "../../components/common/Badge";


const Customers = () => {
  const navigate = useNavigate();
  const customerColumns = [
    { key: "email", label: "Email" },
    { key: "name", label: "Name" },
    { key: "account", label: "Account" },
    { key: "created", label: "Created" },
  ];

  const customers = [
    {
      email: "shagunuxd@proton.me",
      name: "shagun tyagi",
      account: <Badge variant="success">Success</Badge>,
      created: "Nov 18,2025",
    },
  ];
  const customersActions = [
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
      <PageHeader title="Customers" />
      <div className="px-[10px]">
        <ContentCard>
          <PageHeader2 title="Customers" buttonLabel={"Create"} />
          <TableFilters
            filters={[{ label: "Account" }, { label: "Created" }]}
          />

          <DataTable
            columns={customerColumns}
            data={customers}
            actions={customersActions}
          />
        </ContentCard>
      </div>
    </>
  );
};

export default Customers;
