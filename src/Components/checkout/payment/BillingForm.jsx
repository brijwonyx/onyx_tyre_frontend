import Input from "../../Common/Forms/Input";

const BillingForm = () => {
  return (
    <section>
      <div className="border-t border-black ">
      <div className="w-10 bg-primary h-[2px]"></div>
      <h2 className="text-2xl font-bold font-montserrat my-3">
        Billing Information
      </h2>

      {/* Names */}
      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" placeholder="First Name" />
        <Input label="Last Name" placeholder="Last Name"/>
      </div>

      {/* Address */}
      <div className="mt-4">
        <Input label="Address" placeholder="Address" />
      </div>

      <div className="mt-4">
        <Input label="Address 2" placeholder="Address 2" />
      </div>

      {/* City Row */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Input label="ZIP/Postal Code" placeholder="ZIP/Postal Code" />
        <Input label="City" placeholder="City" />
        <Input label="State" placeholder="State" />
      </div>
      </div>
    </section>
  );
};

export default BillingForm;
