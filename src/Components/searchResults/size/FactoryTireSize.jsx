import Button from "../../common/forms/Button";
import TyreSizeOption from "./TyreSizeOption";

const FactoryTireSize = () => {
  return (
    <>
      <div>
        <h4 className="font-montserrat text-xl font-semibold mb-10">
          Factory Tyre Size
        </h4>
        <TyreSizeOption size="19”" front="255/40R20" rear="255/40R20" />
        <TyreSizeOption size="20”" front="255/40R20" rear="255/40R20" />
      </div>
    </>
  );
};
export default FactoryTireSize;
