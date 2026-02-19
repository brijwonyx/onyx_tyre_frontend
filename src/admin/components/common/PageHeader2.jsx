import { Plus } from "lucide-react";

const PageHeader2 = ({ title, buttonLabel, onClick }) => {
  return (
    <>
      <div className="border-b border-[var(--Border-primary, #E4E4E7)] p-3 flex justify-between items-center">
        <h2 className="font-medium text-lg leading-7">{title}</h2>
        {buttonLabel && (
          <button
            onClick={onClick}
            className="flex shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] gap-[6px] items-center py-[6.5px] px-2 rounded-md"
          >
            {" "}
            <Plus size={15} /> {buttonLabel}
          </button>
        )}
      </div>
    </>
  );
};
export default PageHeader2;
