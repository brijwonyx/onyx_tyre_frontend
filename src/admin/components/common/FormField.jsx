const FormField = ({ label, optional, children }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
        {optional && (
          <span className="text-gray-400 text-xs ml-1">(Optional)</span>
        )}
      </label>
      {children}
    </div>
  );
};

export default FormField;
