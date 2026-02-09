import { useState } from "react";
import FormField from "../common/FormField";
import Toggle from "../common/Toggle";

const MarkFulfillmentShipped = () => {
        const [notification,setNotification] = useState(true);
    
  return (
    <>
    <div>
        <FormField label="Tracking Number">
        <input className="w-full border rounded px-3 py-2 text-sm" />
      </FormField>
      <FormField label="Tracking URl">
        <input className="w-full border rounded px-3 py-2 text-sm" />
      </FormField>
    </div>
          <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Send notification</p>
          <p className="text-xs text-gray-500">
            Notify customer about fulfillment
          </p>
        </div>
        <Toggle enabled={notification} onChange={setNotification}/>
      </div>

    </>
  );
};
export default MarkFulfillmentShipped;