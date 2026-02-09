import ContentCard from "../../components/common/ContentCard"
import OrdersFilters from "../../components/orders/OrdersFilters"
import OrdersTable from "../../components/orders/OrdersTable"
import PageHeader from "../../components/common/PageHeader"
import PageHeader2 from "../../components/common/PageHeader2"

const Orders = () => {
    return (
        <>
            <PageHeader title="Orders" />
            <ContentCard>
                <PageHeader2 title="Orders" />
                <OrdersFilters/>
                <OrdersTable/>
            </ContentCard>
        </>
    )
}
export default Orders