import OTPInput from "react-otp-input";

import './styles.css'

interface OTPInputBoxProps{
setError:React.Dispatch<React.SetStateAction<string>>;
setOtp:React.Dispatch<React.SetStateAction<string>>;
otp:string;
error:string;
shake:boolean;
}

const OTPInputBox = (props:OTPInputBoxProps) => {
    const {setError , setOtp , otp , error , shake} = props;
  return (
    <>
    <div
        className={`mt-6 flex justify-center ${
          shake ? "animate-shake" : ""
        }`}
    >
        <OTPInput
          value={otp}
          onChange={(otp)=>{
            setError('')
            setOtp(otp)
          }}
          numInputs={6}
          shouldAutoFocus
          renderInput={(props) => (
            <input
              {...props}
              className={`mx-1 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 input-box ${error && 'error'} ${error && 'focus:ring-red-100'} `}
            />
          )}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-3">{error}</p>
      )}
    </>
  )
}

export default OTPInputBox