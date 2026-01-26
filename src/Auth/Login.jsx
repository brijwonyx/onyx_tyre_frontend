import { Link } from "react-router-dom";
import Button from "../Components/Common/Forms/Button";
import Input from "../Components/Common/Forms/Input";
import PasswordInput from "../Components/Common/Forms/PasswordInput";

const Login = () => {
  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        <div className="py-4 text-center tracking-normal pt-4  px-4 ">
          <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2 ">
            Login
          </h2>
          <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
            Please enter your email and password below to access your account
          </p>
        </div>
        <div className="px-4 mt-4">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mb-4 font-montserrat">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
          <div className="flex items-center font-openSans w-3/4 mx-auto">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>
        <div className="px-4 py-6">
          <Input
            label="Email Address *"
            type="text"
            placeholder="Email Address"
          />
          <PasswordInput label="Password *" />
          <div className="text-primary font-montserrat text-sm font-medium text-center">
            <Link to="/otp-login">Login with OTP</Link>
          </div>
          <div className="flex gap-6 pt-6">
            <Button>Sign in</Button>
            <Link
              to="/reset-password"
              className="font-montserrat text-primary font-semibold text-sm uppercase py-[10px]"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
