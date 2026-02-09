const styles = {
  success: "bg-[#AEE9D1]",
  pending: "bg-[#FFD79D]",
  unfullfilled: "bg-[#FED3D1]" ,
  delivered: "bg-emerald-100 text-emerald-700",
};

const Badge = ({ variant, children }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-[#202223] ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
