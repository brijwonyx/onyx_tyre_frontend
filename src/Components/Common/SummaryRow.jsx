const SummaryRow = ({
  label,
  value,
  bold,
  free = false,
  className = "",
  handleRemoveProtection,
  protectionId,
}) => {
  return (
    <>
      <div className="flex justify-between pb-3">
        <span
          className={`font-openSans text-sm ${bold ? "font-semibold" : "font-normal"}`}
        >
          {label}
        </span>
        <div className="flex flex-col text-end">
          <span
            className={`font-openSans text-base ${
              free ? "font-normal text-primary" : "text-black font-medium"
            } ${className}`}
          >
            {value}
          </span>
          {handleRemoveProtection && (
            <button
              onClick={() => handleRemoveProtection(protectionId)}
              className="text-sm text-red-500 hover:underline cursor-pointer"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SummaryRow;
