import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { getBrand, getMakes, getWidthRatioDiam } from "../api/api.services";
import CallApi from "../Common-Controller/controller";

type TyreContextType = {
  AlltyreSpecApi: any;
  tyreWdrOptions: any;
  getAllWidRDiam: any;
  optionBrands: any;
  fetchBrand: any;
  brandApi: any;
  optionsVehicle: any;
  setOptionsVehicle: any;
  fetchMakes: any;
  makeApi: any
};

const TyreContext = createContext<TyreContextType | null>(null);

export const tyreCart = () => {
  const context = useContext(TyreContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const TyreProvider = ({ children }: { children: ReactNode }) => {
  const [tyreWdrOptions, setTyreWdrOptions] = useState({
    width: [],
    Ratio: [],
    Diameter: [],
  });

  const [optionBrands, setOptionBrands] = useState([]);

  const [optionsVehicle, setOptionsVehicle] = useState({
    make: [],
    model: [],
    year: [],
    style: [],
  });

  // Tyre Size Integration
  const updateWDROptions = (key: any, value: any) => {
    setTyreWdrOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const formatWDROptions = (arr: any) => {
    if (!arr || !arr.length) return [];

    return arr.map((item: any) => ({
      label: item,
      value: item,
    }));
  };

  // Api Call
  const AlltyreSpecApi = CallApi();

  const getAllWidRDiam = async () => {
    const makeRes = await getWidthRatioDiam(AlltyreSpecApi.request);
    const { data: finalAllSpecData } = makeRes || {};

    const { tyre_width, tyre_r, tyre_profile } = finalAllSpecData || {};

    updateWDROptions("width", formatWDROptions(tyre_width));
    updateWDROptions("Ratio", formatWDROptions(tyre_r));
    updateWDROptions("Diameter", formatWDROptions(tyre_profile));
  };

  // Brand Api Integration

  const brandApi = CallApi();

  const fetchBrand = async () => {
    const makeRes = await getBrand(brandApi.request);
    const { data: finalBandsData } = makeRes || {};
    setOptionBrands(finalBandsData);
  };

  const makeApi = CallApi();

  const updateVehicleOptions = (key: any, value: any) => {
    setOptionsVehicle((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const fetchMakes = async () => {
    const makeRes = await getMakes(makeApi.request);
    const { data: finalMakesData } = makeRes || {};
    updateVehicleOptions("make", finalMakesData);
  };

  return (
    <TyreContext.Provider
      value={{
        AlltyreSpecApi,
        tyreWdrOptions,
        getAllWidRDiam,
        optionBrands,
        fetchBrand,
        brandApi,
        setOptionsVehicle,
        optionsVehicle,
        fetchMakes,
        makeApi
      }}
    >
      {children}
    </TyreContext.Provider>
  );
};
