import { Copy } from "lucide-react";

export default function InfoRow({ label, value, className, copy, editing }) {
  return (
    <div
      className={`grid grid-cols-2 justify-between py-4 px-6 border-t text-left text-[13px] text-[#52525B] ${className}`}
    >
      <span className=" font-medium">{label}</span>

      <span className="flex justify-between">
        {editing ? (
          <input
            defaultValue={value === "-" ? "" : value}
            className="border rounded px-2 py-1 text-sm w-full"
          />
        ) : (
          <>
            {value}
            {copy && <Copy size={15} />}
          </>
        )}
        {/* {value}
              {copy && <Copy size={15}/>} */}
      </span>
    </div>
  );
}
