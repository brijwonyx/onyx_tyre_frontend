import TyreSizeOption from "./TyreSizeOption";

const OptionalTyreSize = () => {
  return (
    <>
      <div>
        <h4 className="font-montserrat text-xl font-semibold mb-10">
          Optional Tyre Size
        </h4>
        <TyreSizeOption size="19”" front="255/40R20" rear="255/40R20" />
      </div>
    </>
  );
};

export default OptionalTyreSize;
