import { useState } from "react";
import SummaryRow from "../../common/SummaryRow";

const SummaryDiscount = () => {

  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  return (
    <div className="border-t border-dashed pt-5 mt-5">

      {/* COLLAPSED STATE */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-primary "
        >
          Apply Discount
        </button>
        
      )}

      {/* EXPANDED STATE */}
      {open && (
        <>
          <p className="text-sm text-gray-500 mb-2">
            Enter Discount code
          </p>

          <div className="flex gap-3">

            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Discount code"
              className="flex-1 border rounded-md px-3 py-2 bg-gray-100 outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              disabled={!code}
              className={`px-6 rounded-md font-semibold transition
                ${
                  code
                    ? "bg-green-700 text-white hover:bg-green-800"
                    : "bg-green-200 text-white cursor-not-allowed"
                }
              `}
            >
              APPLY
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default SummaryDiscount;
