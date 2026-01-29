import { useEffect, useState } from "react";
import axios from "axios";

import CustomSelect from "../Common/CustomSelect";
import Button from "../../Common/Forms/Button";

const BASE_URL = "https://tyresaddict.com/actions.fitment.php";

// 🔹 Static brands list
const brands = [
  { value: "22", url: "acura", name: "Acura" },
  { value: "1", url: "alfa_romeo", name: "Alfa Romeo" },
  { value: "21", url: "aston_martin", name: "Aston Martin" },
  { value: "3", url: "audi", name: "Audi" },
  { value: "120", url: "aurus", name: "Aurus" },
  { value: "121", url: "avatr", name: "Avatr" },
  { value: "109", url: "baic", name: "BAIC" },
  { value: "123", url: "belgee", name: "Belgee" },
  { value: "23", url: "bentley", name: "Bentley" },
  { value: "2", url: "bmw", name: "BMW" },
  { value: "37", url: "honda", name: "Honda" },
  { value: "38", url: "hyundai", name: "Hyundai" },
  { value: "71", url: "toyota", name: "Toyota" },
  { value: "72", url: "volkswagen", name: "Volkswagen" },
  // ... add the rest
];

const TyreByVehicle = () => {
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [style, setStyle] = useState(null);

  const [modelOptions, setModelOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);
  const [styleOptions, setStyleOptions] = useState([]);

  const [loadingModel, setLoadingModel] = useState(false);
  const [loadingYear, setLoadingYear] = useState(false);
  const [loadingStyle, setLoadingStyle] = useState(false);

  /* MAKE → MODEL */
  useEffect(() => {
    if (!make) return;

    setModel(null);
    setYear(null);
    setStyle(null);
    setModelOptions([]);
    setYearOptions([]);
    setStyleOptions([]);

    const fetchModels = async () => {
      setLoadingModel(true);
      try {
        const res = await axios.get(BASE_URL, {
          params: { action: "models", auto_id: make.value }
        });
        const doc = new DOMParser().parseFromString(res.data, "text/html");
        const options = Array.from(doc.querySelectorAll("option"))
          .filter(o => o.value)
          .map(o => ({ value: o.value, label: o.textContent }));
        setModelOptions(options);
      } catch (err) {
        console.error("Model API failed", err);
      } finally {
        setLoadingModel(false);
      }
    };

    fetchModels();
  }, [make]);

  /* MODEL → YEAR */
  useEffect(() => {
    if (!model || !make) return;

    setYear(null);
    setStyle(null);
    setYearOptions([]);
    setStyleOptions([]);

    const fetchYears = async () => {
      setLoadingYear(true);
      try {
        const res = await axios.get(BASE_URL, {
          params: { action: "years", auto_id: make, model_id: model }
        });
        const doc = new DOMParser().parseFromString(res.data, "text/html");
        const options = Array.from(doc.querySelectorAll("option"))
          .filter(o => o.value)
          .map(o => o.value);
        setYearOptions(options);
      } catch (err) {
        console.error("Year API failed", err);
      } finally {
        setLoadingYear(false);
      }
    };

    fetchYears();
  }, [model, make]);

  /* YEAR → STYLE */
  useEffect(() => {
    if (!year || !model) return;

    setStyle(null);
    setStyleOptions([]);

    const fetchStyles = async () => {
      setLoadingStyle(true);
      try {
        const res = await axios.get(BASE_URL, {
          params: { action: "modifications", mod_year: year, model_id: model }
        });
        const doc = new DOMParser().parseFromString(res.data, "text/html");
        const options = Array.from(doc.querySelectorAll("option"))
          .filter(o => o.value)
          .map(o => ({ value: o.value, label: o.textContent }));
        setStyleOptions(options);
      } catch (err) {
        console.error("Style API failed", err);
      } finally {
        setLoadingStyle(false);
      }
    };

    fetchStyles();
  }, [year, model]);

  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <h5 className="font-montserrat font-semibold text-xl">Search by Vehicle</h5>

      <div className="grid grid-cols-4 gap-4">
        {/* MAKE */}
        <CustomSelect
          label="Make"
          placeholder="Make"
          options={brands}
          value={make?.name}
          onChange={setMake}
        />

        {/* MODEL */}
        <CustomSelect
          label="Model"
          placeholder={loadingModel ? "Loading..." : "Select Model"}
          options={modelOptions}
          value={model}
          disabled={!make || loadingModel}
          onChange={setModel}
        />

        {/* YEAR */}
        <CustomSelect
          label="Year"
          placeholder={loadingYear ? "Loading..." : "Select Year"}
          options={yearOptions.map(y => ({ value: y, label: y }))}
          value={year}
          disabled={!model || loadingYear}
          onChange={setYear}
        />

        {/* STYLE */}
        <CustomSelect
          label="Style"
          placeholder={loadingStyle ? "Loading..." : "Select Style"}
          options={styleOptions}
          value={style}
          disabled={!year || loadingStyle}
          onChange={setStyle}
        />
      </div>

      <Button
        solid
        className="w-fit mx-auto mt-4"
        disabled={!make || !model || !year || !style}
      >
        View Tyres
      </Button>
    </div>
  );
};

export default TyreByVehicle;
