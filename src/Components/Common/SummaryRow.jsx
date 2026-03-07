const SummaryRow = ({ label, value, bold,free = "false" }) => {
  return (
    <div className="flex justify-between pb-3">
      <span className={`font-openSans text-sm font-normal  ${bold ? "font-semibold" : ""}`}>
        {label}
      </span>
      <span className={`font-openSans text-base  ${free === "true" ? "font-normal text-primary" : "text-black font-medium"}`}>
        {value}
      </span>
    </div>
  );
};

export default SummaryRow;