const Input = ({
  label,
  type = "text",
  placeholder,
  error,
  textWhite,
  variant = "default",
  slug,
  ...props
}) => {
  const variants = {
    default:
      "bg-white px-3 py-[13.5px] focus:outline-none focus:ring-2 focus:ring-primary text-[#52525B] text-base",
    dark: "box-shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] bg-[#FAFAFA] px-2 py-[6px] rounded-md mt-2 text-[#A1A1AA] text-[13px]",
  };
  return (
    <div className="mb-6">
      {label && (
        <label
          className={`font-openSans text-sm font-normal ${textWhite ? "text-white" : "text-black"}`}
        >
          {label}
        </label>
      )}
      <div className="flex items-center relative">
        {slug && <p className="text-sm text-gray-400 absolute top-2 px-3 py-[6px] border-r">{slug}</p>}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-md border-solid border-[1px] border-[#F5F5F5] p-3 mt-1
            ${slug ? "pl-[40px]" : ""} 
           ${variants[variant]}
          ${error ? "border-red-500" : "border-gray-300"}`}
          {...props}
        />

        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
