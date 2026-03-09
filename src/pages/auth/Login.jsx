import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../Components/Common/Forms/Input";
import PasswordInput from "../../Components/Common/Forms/PasswordInput";
import { Button } from "@headlessui/react";
import useAuthController from "./auth-controller";

const Login = () => {

const {loginData, handleLogin, onChangeHandler} = useAuthController()
console.log(loginData)

  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        <div className="py-4 text-center px-4">
          <h2 className="font-montserrat text-2xl font-medium mb-2">
            Login
          </h2>
          <p className="text-[#8D8D8D] text-sm font-openSans">
            Please enter your email and password below to access your account
          </p>
        </div>

        <form className="px-4 py-6" onSubmit={handleLogin}>
          <Input
            label="Email Address *"
            type="text"
            placeholder="Email Address"
            onChange={(val) => onChangeHandler('identifier', val)}
          />

          <PasswordInput
            label="Password *"
            type="password"
            onChange={(val) => onChangeHandler('password', val)}
          />

          {/* {error && (
            <p className="text-red-500 text-sm text-center mb-3">
              {error}
            </p>
          )} */}

          <div className="text-primary text-sm text-center">
            <Link
              to="/otp-login"
              className={"pointer-events-none opacity-50"}
            >
              Login with OTP
            </Link>
          </div>

          <div className="flex gap-6 pt-6">
            <Button type="submit">
              {"Sign in"}
            </Button>

            <Link
              to="/reset-password"
              className={`font-montserrat text-primary font-semibold text-sm uppercase py-[10px] 
                
              }`}
              // ${loading ? "pointer-events-none opacity-50" : ""}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
