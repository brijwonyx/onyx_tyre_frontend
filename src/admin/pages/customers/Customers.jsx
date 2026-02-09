import ContentCard from "../../components/common/ContentCard";
import PageHeader from "../../components/common/PageHeader";
import CustomerFilters from "../../components/customers/CustomerFilters";
import CustomersList from "../../components/customers/CustomersList";

const Customers = () => {
  return (
    <>
      <PageHeader title="Customers" />
      <ContentCard>
        <CustomerFilters />
        <CustomersList />
      </ContentCard>
    </>
  );
};

export default Customers;
