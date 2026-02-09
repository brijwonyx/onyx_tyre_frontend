import { useState } from "react";
import Toggle from "../common/Toggle";

const OrderFulfillmentForm = () => {
    const [notification,setNotification] = useState(true);
  return (
    <div className="space-y-6 text-sm">
      {/* Location */}
      <div>
        <label className="block font-medium mb-1">Location</label>
        <select className="w-full border rounded px-3 py-2">
          <option>Warehouse 1</option>
          <option>Warehouse 2</option>
        </select>
      </div>

      {/* Shipping method */}
      <div>
        <label className="block font-medium mb-1">Shipping method</label>
        <select className="w-full border rounded px-3 py-2">
          <option>Express Shipping</option>
          <option>Standard Shipping</option>
        </select>
      </div>

      {/* Items */}
      <div>
        <label className="block font-medium mb-2">Items to fulfill</label>

        <div className="border rounded p-3 flex justify-between items-center">
          <div>
            <p className="font-medium">Pirelli Tire</p>
            <p className="text-xs text-gray-500">sku-374-3483</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">In stock: 100000</span>
            <input
              type="number"
              className="w-16 border rounded px-2 py-1"
              defaultValue={1}
            />
          </div>
        </div>
      </div>

      {/* Notification */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Send notification</p>
          <p className="text-xs text-gray-500">
            Notify customer about fulfillment
          </p>
        </div>
        <Toggle enabled={notification} onChange={setNotification}/>
      </div>
    </div>
  );
};

export default OrderFulfillmentForm;
