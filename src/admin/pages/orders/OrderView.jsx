import { useState } from "react";
import ContentCard from "../../components/common/ContentCard";
import ActivityCard from "../../components/orders/ActivityCard";
import CustomerCard from "../../components/orders/CustomerCard";
import OrderSummary from "../../components/orders/OrderSummary";
import PaymentsCard from "../../components/orders/PaymentCard";
import UnfulfilledItemsCard from "../../components/orders/UnfulfilledItemsCard";
import PageHeader from "../../components/common/PageHeader";

import OrderFulfillmentForm from "../../components/orders/OrderFulfillmentForm";
import MarkFulfillmentShipped from "../../components/orders/MarkFulfillmentShipped";

const OrderView = () => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <PageHeader title="Orders" />
      <div className="flex">
        <div className="w-7/12">
          <OrderSummary />
          <PaymentsCard />
          <UnfulfilledItemsCard onAction={setActiveModal} />
        </div>
        <div className="w-5/12">
          <CustomerCard />
          <ActivityCard />
        </div>
      </div>

      <DrawerModal
        open={activeModal === "fullfill"}
         onClose={() => setActiveModal(null)}
        title="Order Fulfillment"
      >
        <OrderFulfillmentForm />
      </DrawerModal>
            <DrawerModal
        open={activeModal === "shipped"}
         onClose={() => setActiveModal(null)}
        title="Mark fulfillment shipped"
      >
        <MarkFulfillmentShipped />
      </DrawerModal>
    </>
  );
};
export default OrderView;
