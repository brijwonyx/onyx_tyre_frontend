const NumberField = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-montserrat font-normal text-base leading-[24px] text-white">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          bg-gray-100
          px-4 py-3
          text-gray-800
          outline-none
          focus:bg-white
        "
      />
    </div>
  );
};
export default NumberField; 