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
import InfoRow from "../../components/common/InfoRow";
import Drawer from "../../../components/common/Drawer";

const OrderView = () => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <PageHeader title="Orders" />
      <div className="grid grid-cols-3 gap-[10px] px-[10px]">
        <div className="col-span-2">
          <OrderSummary />
          <PaymentsCard />
          <UnfulfilledItemsCard onAction={setActiveModal} />
        </div>
        <div className="">
          <ContentCard>
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Customer</h2>
            </div>
            <InfoRow label="ID" value="abc xyz" />
            <InfoRow label="Contact" value="abc@gmail.com" copy/>
            <InfoRow label="Shipping address" value="-" />
            <InfoRow label="Billing address" value="-" />
          </ContentCard>
          {/* <CustomerCard /> */}
          <ActivityCard />
        </div>
      </div>

      <Drawer
        open={activeModal === "fullfill"}
         onClose={() => setActiveModal(null)}
        title="Order Fulfillment"
      >
        <OrderFulfillmentForm />
      </Drawer>
            <Drawer
        open={activeModal === "shipped"}
         onClose={() => setActiveModal(null)}
        title="Mark fulfillment shipped"
      >
        <MarkFulfillmentShipped />
      </Drawer>
    </>
  );
};
export default OrderView;
