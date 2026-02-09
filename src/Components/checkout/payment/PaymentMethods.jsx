import { useState } from "react";

const METHODS = [
  {
    id: "card",
    label: "Credit / Debit Card (Visa, MasterCard, Amex, …)",
    icon: "💳",
  },
  {
    id: "paypal",
    label: "PayPal",
    icon: "🅿️",
  },
  {
    id: "gpay",
    label: "Google Pay",
    icon: "🟢",
  },
  {
    id: "venmo",
    label: "Venmo",
    icon: "🔵",
  },
  {
    id: "affirm",
    label: "Pay over time",
    icon: "🟣",
  },
];

const PaymentMethods = () => {
  const [selected, setSelected] = useState("affirm");

  return (
    <section>
      <div className="border-t border-black ">
      <div className="w-10 bg-primary h-[2px]"></div>
      <h2 className="text-2xl font-bold font-montserrat my-3">
        Payment Method
      </h2>

      <div className="border rounded-lg overflow-hidden">
        {METHODS.map((method) => (
          <label
            key={method.id}
            className={`flex items-center gap-4 p-4 cursor-pointer border-b last:border-none
              ${selected === method.id ? "bg-gray-50" : ""}
            `}
          >
            <input
              type="radio"
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
            />

            <span className="text-xl">
              {method.icon}
            </span>

            <span className="text-sm font-medium">
              {method.label}
            </span>
          </label>
        ))}
      </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
