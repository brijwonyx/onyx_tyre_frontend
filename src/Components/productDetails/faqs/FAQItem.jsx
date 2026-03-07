import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black py-5">

      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-semibold font-montserrat font-lg">
          {question}
        </span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* BODY */}
      {open && (
        <p className="mt-3 text-black font-openSans text-base pr-10">
          {answer}
        </p>
      )}

    </div>
  );
};

export default FAQItem;
