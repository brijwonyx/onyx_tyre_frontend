import { useState } from "react";
import PaymentMethods from "../../components/checkout/payment/PaymentMethods";
import BillingForm from "../../components/checkout/payment/BillingForm";
import affirm from "../../assets/affirm.png";


const PaymentPage = () => {

  const [sameAddress, setSameAddress] = useState(true);

  return (
    <div className="space-y-10">

      {/* PAYMENT METHODS */}
      <PaymentMethods />

      {/* SAME ADDRESS */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={() => setSameAddress(!sameAddress)}
        />
        <span className="text-sm">
          My billing and shipping address are the same
        </span>
      </div>

      {/* BILLING FORM */}
      {!sameAddress && <BillingForm />}

      {/* CTA */}
      <div className="flex w-full justify-end">
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold flex gap-1 items-center">
        CHECK OUT WITH 
        <img src={affirm} alt="Affirm" />
      </button>
      </div>


    </div>
  );
};

export default PaymentPage;
