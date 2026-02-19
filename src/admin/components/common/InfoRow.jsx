import { Copy } from "lucide-react";

export default function InfoRow({ label, value,className, copy }) {
  return (
    <div className={`grid grid-cols-2 justify-between py-4 px-6 border-t text-left text-[13px] text-[#52525B] ${className}`}>
      <span className=" font-medium">
        {label}
      </span>

      <span className="flex justify-between">
        {value}
              {copy && <Copy size={15}/>}
      </span>

    </div>
  );
}
