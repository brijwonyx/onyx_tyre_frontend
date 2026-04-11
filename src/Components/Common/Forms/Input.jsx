const Input = ({
  label,
  type,
  placeholder,
  error,
  textWhite,
  variant = "default",
  slug,
  subLabel,
  onChange,
  inputRef,
  maxLength,
  inputClassName,
  endAdornment,
  name,
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
          className={`font-openSans text-sm font-normal ${
            textWhite ? "text-white" : "text-black"
          }`}
        >
          {label}
          <span className="text-[#A1A1AA]">{subLabel}</span>
        </label>
      )}

      <div className="flex items-center relative">
        {slug && (
          <p className="absolute">
            {slug}
          </p>
        )}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          ref={inputRef}
          maxLength={maxLength}
          className={`w-full rounded-md border-solid border-[1px] border-[#F5F5F5] p-3 mt-1
            ${variants[variant]}
            ${error ? "border-red-500" : "border-gray-300"} ${inputClassName}`}
          {...props}
        />
         {endAdornment && (
          <p className="absolute right-[4px]">
            {endAdornment}
          </p>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
