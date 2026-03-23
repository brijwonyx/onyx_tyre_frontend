import { useEffect, useState } from "react";

import CustomSelect from "../../common/forms/CustomSelect";

import Button from "../../common/forms/Button";

import CallApi from "../../../Common-Controller/controller";

import {
  getAllFitments,
  getMakes,
  getModalByMakes,
  getStyleByAll,
  getYearByModel,
} from "../../../api/api.services.js";
import TyreByAllDetail from "./TyreByAllDetail.jsx";

const TyreByVehicle = () => {
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

  const [fitmentDetail, setFitmentDetail] = useState(null);

  const makeApi = CallApi();
  const modelApi = CallApi();
  const yearApi = CallApi();
  const styleApi = CallApi();
  const fitmentsApi = CallApi();

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
    setFitmentDetail(null);
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

    setFitmentDetail(null);

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

    setFitmentDetail(null);

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

    setFitmentDetail(null);

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

  const fetchFitments = async () => {
    const id = vehicle?.model?.model_id;
    const year = vehicle?.year?.value;
    const modificationId = vehicle?.style?.mod_id;

    const makeRes = await getAllFitments(
      fitmentsApi?.request,
      id,
      year,
      modificationId,
    );
    const { data: fitmentData } = makeRes || {};

    setFitmentDetail(fitmentData);
  };

  const handleOnClick = () => {
    setFitmentDetail(null);
    fetchFitments();
  };

  const isButtonValid =
    !vehicle?.make || !vehicle?.model || !vehicle?.style || !vehicle?.year;

  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <h5 className="font-montserrat font-semibold text-xl">
        Search by Vehicle
      </h5>

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

      <Button
        solid
        className="w-fit mx-auto mt-4"
        onClick={handleOnClick}
        loading={fitmentsApi?.loading}
        disabled={isButtonValid}
      >
        View Tyres
      </Button>
      {fitmentDetail && <TyreByAllDetail fitmentDetail={fitmentDetail} />}
    </div>
  );
};

export default TyreByVehicle;
