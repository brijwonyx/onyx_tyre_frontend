const Input = ({
  label,
  type = "text",
  placeholder,
  error,
  ...props
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="font-openSans text-sm font-normal text-black">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border-solid border-[1px] border-[#F5F5F5] p-3 text-base text-[#52525B] mt-1
          focus:outline-none focus:ring-2 focus:ring-primary
          ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
