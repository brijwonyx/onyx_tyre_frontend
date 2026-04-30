const METHODS = [
  {
    id: "card",
    label: "Credit / Debit Card (Visa, MasterCard, Amex)",
    icon: "Card",
  },
  {
    id: "paypal",
    label: "PayPal",
    icon: "PayPal",
  },
  {
    id: "affirm",
    label: "Pay over time",
    icon: "Affirm",
  },
];

const PaymentMethods = ({ selectedMethod = "card", onChange }) => {
  return (
    <section>
      <div className="border-t border-black ">
        <div className="h-[2px] w-10 bg-primary"></div>
        <h2 className="my-3 font-montserrat text-2xl font-bold">
          Payment Method
        </h2>

        <div className="overflow-hidden rounded-lg border">
          {METHODS.map((method) => {
            const isAvailable = method.id === "card";
            const isSelected = selectedMethod === method.id;

            return (
              <label
                key={method.id}
                className={`flex items-center justify-between gap-4 border-b p-4 last:border-none ${
                  isAvailable ? "cursor-pointer" : "cursor-not-allowed opacity-60"
                } ${isSelected ? "bg-gray-50" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="payment-method"
                    checked={isSelected}
                    disabled={!isAvailable}
                    onChange={() => onChange?.(method.id)}
                  />

                  <span className="min-w-14 font-montserrat text-sm font-semibold text-black">
                    {method.icon}
                  </span>

                  <span className="font-openSans text-sm font-medium">
                    {method.label}
                  </span>
                </div>

                {!isAvailable ? (
                  <span className="font-openSans text-xs text-[#8E8E93]">
                    Coming soon
                  </span>
                ) : null}
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
