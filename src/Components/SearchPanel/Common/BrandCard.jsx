const BrandCard = ({ id, logo, checked, onChange }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(id)}
        className="hidden"
      />
      <div
        className={`
          flex items-center justify-center
          h-16
          border
          bg-white
          transition
          ${checked
            ? "shadow-[inset_0_0_0_2px_#22c55e]"
            : "hover:shadow-[inset_0_0_0_1px_#9ca3af]"}
        `}
      >
        <img
          src={logo}
          alt={id}
          className="max-h-10 object-contain"
        />
      </div>
    </label>
  );
};

export default BrandCard;
