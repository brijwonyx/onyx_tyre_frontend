import { useState } from "react";
import { MapPin } from "lucide-react"; // optional icon

const InlineEditableField = ({
  label,
  value,
grey = false,
onChange,   
}) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="w-full">
      
      {/* Label */}
      <p className="text-sm text-gray-600 mb-2">
        {label}
      </p>

      <div className={`"rounded-lg px-4 py-3 flex items-center justify-between  ${grey ? "bg-[#EAEAEA]" : "border border-[#E6E6E6] bg-white" } `}>
        
        {/* LEFT */}
        {!editing ? (
          <div className="flex items-center gap-3">
            <MapPin size={18} color="#000" />
            <span className="text-gray-800 font-medium">
              {inputValue}
            </span>
          </div>
        ) : (
          <input
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-transparent outline-none border-b border-gray-400 w-32"
          />
        )}

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setEditing(!editing)}
          className="text-green-700 font-medium"
        >
          {editing ? "Save" : "Change"}
        </button>
      </div>
    </div>
  );
};

export default InlineEditableField;
