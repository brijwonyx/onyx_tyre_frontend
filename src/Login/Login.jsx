import { Link } from "react-router-dom";
import Button from "../Components/Common/Forms/Button";
import Input from "../Components/Common/Forms/Input";
import PasswordInput from "../Components/Common/Forms/PasswordInput";

const Login = () => {
  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        <div className="py-4 text-center tracking-normal pt-4   ">
          <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2 ">Login</h2>
          <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
            Please enter your email and password below to access your account
          </p>
        </div>
        <div className="px-4 py-6">
          <Input
            label="Email Address *"
            type="text"
            placeholder="Email Address"
          />
          <PasswordInput label="Password *" />
          <div className="flex gap-6 pt-6">
            <Button>Sign in</Button>
            <Link to="/reset-password" className="font-montserrat text-primary font-semibold text-sm uppercase py-[10px]">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
