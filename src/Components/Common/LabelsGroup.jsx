const LabelsGroup = () => {
  return (
    <>
      {/* BADGES */}
      <div className="flex gap-2 mt-4 flex-wrap">
        <span className="px-2 py-1 text-xs bg-[#1E90FF] text-white rounded">
          Touring
        </span>
        <span className="px-2 py-1 text-xs bg-[#4CAF50] text-white rounded">
          All-Season
        </span>
        <span className="px-2 py-1 text-xs bg-[#FF9800] text-white rounded">
          92H
        </span>
      </div>
    </>
  );
};
export default LabelsGroup;
