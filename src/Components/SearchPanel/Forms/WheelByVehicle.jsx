import { useEffect, useState } from "react";

import CustomSelect from "../../common/forms/CustomSelect";

import Button from "../../common/forms/Button";

import CallApi from "../../../Common-Controller/controller";

import { useNavigate } from "react-router-dom";
import {
  getMakes,
  getModalByMakes,
  getStyleByAll,
  getYearByModel,
} from "../../../api/api.services";

const WheelByVehicle = () => {
  const [vehicle, setVehicle] = useState({
    make: null,
    model: null,
    year: null,
    style: null,
  });

  const [options, setOptions] = useState({
    make: [],
    model: [],
    year: [],
    style: [],
  });

  const [zipCode, setZipCode] = useState("12");

  const navigate = useNavigate();

  const makeApi = CallApi();
  const modelApi = CallApi();
  const yearApi = CallApi();
  const styleApi = CallApi();

  const updateOptions = (key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSelectChange = (field) => (option) => {
    setVehicle((prev) => ({
      ...prev,
      [field]: option,
    }));
  };

  useEffect(() => {
    const fetchMakes = async () => {
      const makeRes = await getMakes(makeApi.request);
      const { data: finalMakesData } = makeRes || {};
      updateOptions("make", finalMakesData);
    };

    fetchMakes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* MAKE → MODEL */
  useEffect(() => {
    if (!vehicle?.make) return;

    setVehicle((prev) => ({
      ...prev,
      model: null,
      year: null,
      style: null,
    }));

    updateOptions("model", []);
    updateOptions("year", []);
    updateOptions("style", []);

    const id = vehicle?.make?.make_id;

    const fetchModals = async () => {
      const makeRes = await getModalByMakes(modelApi.request, id);
      const { data: finalModelData } = makeRes || {};
      updateOptions("model", finalModelData);
    };

    fetchModals();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle?.make]);

  /* Year */
  useEffect(() => {
    if (!vehicle?.make || !vehicle?.model) return;

    setVehicle((prev) => ({
      ...prev,
      year: null,
      style: null,
    }));

    updateOptions("year", []);
    updateOptions("style", []);

    const id = vehicle?.model?.model_id;

    const fetchYears = async () => {
      const makeRes = await getYearByModel(yearApi.request, id);
      const { data: finalYearData } = makeRes || {};
      const yearOfData =
        finalYearData?.map((item) => ({
          value: item,
          label: item,
        })) || [];

      updateOptions("year", yearOfData);
    };

    fetchYears();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle?.make, vehicle?.model]);

  /* Style */
  useEffect(() => {
    if (!vehicle?.make || !vehicle?.model || !vehicle?.year) return;

    setVehicle((prev) => ({
      ...prev,
      style: null,
    }));

    updateOptions("style", []);

    const id = vehicle?.model?.model_id;
    const year = vehicle?.year?.value;

    const fetchStyle = async () => {
      const makeRes = await getStyleByAll(styleApi.request, id, year);
      const { data: styleData } = makeRes || {};

      updateOptions("style", styleData);
    };

    fetchStyle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle?.make, vehicle?.model, vehicle?.year]);

  const isButtonValid =
    !vehicle?.make ||
    !vehicle?.model ||
    !vehicle?.style ||
    !vehicle?.year ||
    !zipCode;

  return (
    <div className="flex flex-col gap-4 text-white w-full ">
      <h5 className="font-montserrat font-semibold text-xl leading-[20px] text-left ">
        Search by Vehicle
      </h5>
      {/* <div className="grid grid-cols-4 gap-4">
        <CustomSelect
          label="Year"
          placeholder="Year"
          options={["2024", "2023", "2022"]}
          value={year}
          onChange={setYear}
        />
        <CustomSelect
          label="Make"
          placeholder="Make"
          options={["Honda", "Hyundai", "BMW"]}
          value={make}
          onChange={setMake}
        />
        <CustomSelect
          label="Model"
          placeholder="Model"
          options={["Honda", "Hyundai", "BMW"]}
          value={model}
          onChange={setModel}
        />
        <CustomSelect
          label="Style"
          placeholder="Style"
          options={["Honda", "Hyundai", "BMW"]}
          value={style}
          onChange={setStyle}
        />
      </div> */}
      <div className="grid grid-cols-4 gap-4">
        {/* MAKE */}
        <CustomSelect
          label="Make"
          placeholder={makeApi?.loading ? "Loading..." : "Select Make"}
          options={options?.make}
          labelKey="make_name"
          value={vehicle.make}
          onChange={handleSelectChange("make")}
        />

        {/* MODEL */}
        <CustomSelect
          label="Model"
          labelKey="model_name"
          placeholder={modelApi?.loading ? "Loading..." : "Select Model"}
          options={options?.model}
          value={vehicle?.model}
          onChange={handleSelectChange("model")}
        />

        {/* YEAR */}
        <CustomSelect
          label="Year"
          labelKey="label"
          placeholder={yearApi?.loading ? "Loading..." : "Select Year"}
          options={options?.year}
          value={vehicle?.year}
          onChange={handleSelectChange("year")}
        />

        {/* STYLE */}
        <CustomSelect
          label="Style"
          labelKey="mod_name"
          placeholder={styleApi?.loading ? "Loading..." : "Select Style"}
          options={options?.style}
          value={vehicle?.style}
          onChange={handleSelectChange("style")}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-white" />
        <span className="text-white text-base font-openSans">&amp;</span>
        <div className="flex-1 h-px bg-white" />
      </div>
      <div>
        <CustomSelect
          label="Enter ZIP or Postal Code to See Shipping & Installer Options:"
          placeholder="Zip Code"
          options={["000000", "111111", "101010"]}
          value={zipCode}
          onChange={setZipCode}
        />
      </div>
      <Button
        solid
        className="w-fit mx-auto mt-3"
        onClick={() => navigate("/search?type=vehicle")}
        disabled={isButtonValid}
      >
        View Tyres
      </Button>
    </div>
  );
};

export default WheelByVehicle;
