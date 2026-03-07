const NumberField = ({ label, value, onChange, varient = "white" }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        className={`font-montserrat font-normal text-base leading-[24px] ${varient === "white" ? "text-white" : "text-black"} `}
      >
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full
          bg-gray-100
          px-4 py-3
          text-gray-800
          outline-none
          focus:bg-white
        "
          ${varient === "white" ? "bg-bg-gray-100" : "bg-white border-[#404040] border "}`}
      />
    </div>
  );
};
export default NumberField;
