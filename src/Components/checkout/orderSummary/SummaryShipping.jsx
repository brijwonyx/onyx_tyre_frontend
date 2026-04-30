import { Settings } from "lucide-react";

const SummaryShipping = ({ shippingAddress }) => {
  return (
    <div className="mt-6 border-t pt-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-2 font-montserrat border-b border-[#E6E6E6] text-xl py-2">
          Ship To:
        </h3>
        <Settings />
      </div>
      {shippingAddress !== null ? (
        <p className="text-sm text-gray-600">
          {shippingAddress?.name} <br />
          {shippingAddress?.address_line1}
          <br />
          {shippingAddress?.landmark} {shippingAddress?.city},{" "}
          {shippingAddress?.state}
        </p>
      ) : null}

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold mb-2 font-montserrat border-b border-[#E6E6E6] text-xl py-2">
            Shipping Method:
          </h3>
          <Settings />
        </div>

        <p className="text-sm text-black font-openSans">Mobile Van</p>
      </div>
    </div>
  );
};

export default SummaryShipping;
