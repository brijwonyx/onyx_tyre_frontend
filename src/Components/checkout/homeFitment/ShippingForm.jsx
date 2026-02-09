
import { useNavigate } from "react-router-dom";
import Input from "../../common/forms/Input";

const ShippingForm = () => {

  const navigate = useNavigate();

  return (
    <div className="border rounded-xl p-8 bg-gray-50 space-y-6">

      <div className="border-t border-black ">
      <div className="w-10 bg-primary h-[2px]"></div>
      <h2 className="text-2xl font-bold font-montserrat my-3">
          Shipping Information
        </h2>
        <p className="text-sm text-black font-openSans ">
          Please enter your shipping information and confirm a few additional details for your order.
        </p>
      </div>

      {/* EMAIL */}
      <div>
        <Input label="Email Address" placeholder="email@email.com" />
        <p className="text-xs text-black mt-1 font-openSans">
          You can create an account after checkout or
          <span className="text-primary cursor-pointer ml-1">
            sign in
          </span>
          with your existing account
        </p>
      </div>

      {/* NAME */}
      <div className="grid grid-cols-2 gap-4">

          <Input label="First Name" placeholder="First Name" />
          <Input label="Last Name" placeholder="Last Name"/>
      </div>

      <Input label="Address" placeholder="Address" />
      <Input label="Address 2" placeholder="Address 2" />


      {/* CITY ROW */}
      <div className="grid grid-cols-3 gap-4">
        <Input label="ZIP/Postal Code" placeholder="ZIP/Postal Code" />
        <Input label="City" placeholder="City" />
        <Input label="State" placeholder="State" />
      </div>

      {/* PHONE */}
      <Input label="Shipping Phone Number" placeholder="30303" />
        <p className="text-sm text-black mt-1 font-openSans">
          We require your phone number and email address for efficient order processing.
          We will not use your information for marketing purposes.
        </p>


      {/* CREATE ACCOUNT */}
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <span className="text-sm">
          Create account
        </span>
      </div>

      <p className="text-sm text-[black] font-openSans">
        Register an account now for a faster checkout next time.
      </p>

      {/* BUTTONS */}
      <div className="flex justify-end gap-4 pt-4">

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 border border-black rounded-full"
        >
          BACK
        </button>

        <button
          onClick={() => navigate("/checkout/payment")}
          className="bg-primary text-white px-6 py-2 rounded-full font-semibold"
        >
          CONTINUE TO PAYMENT →
        </button>

      </div>

    </div>
  );
};

export default ShippingForm;
