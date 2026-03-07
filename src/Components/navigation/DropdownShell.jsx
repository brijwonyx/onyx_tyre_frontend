const DropdownShell = ({ children }) => {
  return (
    <div className="
      absolute
      left-0
      top-full
      w-full
      bg-white
      shadow-xl
      border-t
      z-50
    ">
      {children}
    </div>
  );
};

export default DropdownShell;
