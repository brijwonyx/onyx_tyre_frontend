import TyreByVehicle from "./Forms/TyreByVehicle";
import TyreBySize from "./Forms/TyreBySize";
import TyreByBrand from "./Forms/TyreByBrand";
import WheelByBrand from "./Forms/WheelByBrand";
import WheelBySize from "./Forms/WheelBySize";
import WheelByVehicle from "./Forms/WheelByVehicle"; 

const SearchForm = ({ type, method }) => {
  const FORM_MAP = {
    tyres: {
      vehicle: TyreByVehicle,
      size:TyreBySize,
      brand:TyreByBrand,
    },
    wheels: {
      vehicle: WheelByVehicle,
      size:WheelBySize,
      brand:WheelByBrand,
    },
  };
  const FormComponent = FORM_MAP?.[type]?.[method];

  if (!FormComponent) return null;

  return <FormComponent />;
};

export default SearchForm;
