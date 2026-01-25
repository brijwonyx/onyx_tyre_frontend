import { Link } from "react-router-dom";
import Button from "../Components/Common/Forms/Button";
import Input from "../Components/Common/Forms/Input";
import PasswordInput from "../Components/Common/Forms/PasswordInput";

const SignUp = () => {
  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="bg-[#F4F4F4] w-6/12 mx-auto py-6 rounded-lg">
        <div className="text-center tracking-normal">
          <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2 ">
            Register
          </h2>
          <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
            Please register below to create an account
          </p>
        </div>
        <div className="px-6 pt-6">
          <Input label="First Name" type="text" placeholder="First Name" />
          <Input label="Last Name" type="text" placeholder="Last Name" />
          <Input
            label="Email Address *"
            type="text" 
            placeholder="Email Address"
          />
          <PasswordInput label="Password *" />
          <div className="flex gap-6 pt-6">
            <Button solid>Register now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
