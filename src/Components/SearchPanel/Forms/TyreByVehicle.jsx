import { useEffect, useState } from "react";
import axios from "axios";

import CustomSelect from "../Common/CustomSelect";
import Button from "../../Common/Forms/Button";

const BASE_URL = "http://tyresaddict.ru/api/tyres";

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
  { value: "24", url: "brilliance", name: "Brilliance" },
  { value: "99", url: "bugatti", name: "Bugatti" },
  { value: "25", url: "buick", name: "Buick" },
  { value: "26", url: "byd", name: "BYD" },
  { value: "4", url: "cadillac", name: "Cadillac" },
  { value: "90", url: "changan", name: "Changan" },
  { value: "28", url: "chery", name: "Chery" },
  { value: "6", url: "chevrolet", name: "Chevrolet" },
  { value: "29", url: "chrysler", name: "Chrysler" },
  { value: "30", url: "citroen", name: "Citroen" },
  { value: "104", url: "dacia", name: "Dacia" },
  { value: "7", url: "daewoo", name: "Daewoo" },
  { value: "31", url: "daihatsu", name: "Daihatsu" },
  { value: "97", url: "datsun", name: "Datsun" },
  { value: "32", url: "dodge", name: "Dodge" },
  { value: "92", url: "dongfeng", name: "Dongfeng" },
  { value: "124", url: "evolute", name: "Evolute" },
  { value: "106", url: "exeed", name: "Exeed" },
  { value: "33", url: "faw", name: "FAW" },
  { value: "11", url: "ferrari", name: "Ferrari" },
  { value: "9", url: "fiat", name: "Fiat" },
  { value: "98", url: "fisker", name: "Fisker" },
  { value: "5", url: "ford", name: "Ford" },
  { value: "102", url: "foton", name: "Foton" },
  { value: "100", url: "gac", name: "GAC" },
  { value: "34", url: "geely", name: "Geely" },
  { value: "95", url: "genesis", name: "Genesis" },
  { value: "35", url: "gmc", name: "GMC" },
  { value: "36", url: "great_wall", name: "Great Wall" },
  { value: "101", url: "haima", name: "Haima" },
  { value: "96", url: "haval", name: "Haval" },
  { value: "91", url: "holden", name: "Holden" },
  { value: "37", url: "honda", name: "Honda" },
  { value: "118", url: "hongqi", name: "Hongqi" },
  { value: "10", url: "hummer", name: "Hummer" },
  { value: "38", url: "hyundai", name: "Hyundai" },
  { value: "39", url: "infiniti", name: "Infiniti" },
  { value: "40", url: "isuzu", name: "Isuzu" },
  { value: "94", url: "iveco", name: "Iveco" },
  { value: "103", url: "jac", name: "Jac" },
  { value: "110", url: "jaecoo", name: "Jaecoo" },
  { value: "41", url: "jaguar", name: "Jaguar" },
  { value: "42", url: "jeep", name: "Jeep" },
  { value: "116", url: "jetour", name: "Jetour" },
  { value: "122", url: "jetta", name: "Jetta" },
  { value: "111", url: "kaiyi", name: "Kaiyi" },
  { value: "127", url: "kgm-ssang-yong", name: "KGM SsangYong" },
  { value: "8", url: "kia", name: "Kia" },
  { value: "43", url: "lamborghini", name: "Lamborghini" },
  { value: "13", url: "lancia", name: "Lancia" },
  { value: "44", url: "land_rover", name: "Land Rover" },
  { value: "14", url: "lexus", name: "Lexus" },
  { value: "45", url: "lifan", name: "Lifan" },
  { value: "46", url: "lincoln", name: "Lincoln" },
  { value: "112", url: "livan", name: "Livan" },
  { value: "119", url: "lixiang", name: "LiXiang" },
  { value: "47", url: "lotus", name: "Lotus" },
  { value: "48", url: "maserati", name: "Maserati" },
  { value: "83", url: "maybach", name: "Maybach" },
  { value: "15", url: "mazda", name: "Mazda" },
  { value: "89", url: "mclaren", name: "McLaren" },
  { value: "19", url: "mercedes", name: "Mercedes" },
  { value: "105", url: "mercedes-maybach", name: "Mercedes-Maybach" },
  { value: "84", url: "mercury", name: "Mercury" },
  { value: "50", url: "mg", name: "MG" },
  { value: "16", url: "mini", name: "Mini" },
  { value: "51", url: "mitsubishi", name: "Mitsubishi" },
  { value: "52", url: "morgan", name: "Morgan" },
  { value: "53", url: "nissan", name: "Nissan" },
  { value: "55", url: "oldsmobile", name: "Oldsmobile" },
  { value: "114", url: "omoda", name: "Omoda" },
  { value: "56", url: "opel", name: "Opel" },
  { value: "57", url: "peugeot", name: "Peugeot" },
  { value: "58", url: "plymouth", name: "Plymouth" },
  { value: "59", url: "pontiac", name: "Pontiac" },
  { value: "60", url: "porsche", name: "Porsche" },
  { value: "125", url: "ram", name: "RAM" },
  { value: "93", url: "ravon", name: "Ravon" },
  { value: "61", url: "renault", name: "Renault" },
  { value: "62", url: "rolls_royce", name: "Rolls-Royce" },
  { value: "63", url: "rover", name: "Rover" },
  { value: "17", url: "saab", name: "Saab" },
  { value: "64", url: "saturn", name: "Saturn" },
  { value: "65", url: "scion", name: "Scion" },
  { value: "18", url: "seat", name: "Seat" },
  { value: "117", url: "seres", name: "Seres" },
  { value: "66", url: "skoda", name: "Skoda" },
  { value: "67", url: "smart", name: "Smart" },
  { value: "126", url: "soueast", name: "Soueast" },
  { value: "85", url: "ssang_yong", name: "Ssang Yong" },
  { value: "69", url: "subaru", name: "Subaru" },
  { value: "70", url: "suzuki", name: "Suzuki" },
  { value: "108", url: "tank", name: "Tank" },
  { value: "88", url: "tesla", name: "Tesla" },
  { value: "71", url: "toyota", name: "Toyota" },
  { value: "72", url: "volkswagen", name: "Volkswagen" },
  { value: "20", url: "volvo", name: "Volvo" },
  { value: "113", url: "voyah", name: "Voyah" },
  { value: "74", url: "wiesmann", name: "Wiesmann" },
  { value: "115", url: "zeekr", name: "Zeekr" },
  { value: "75", url: "gaz", name: "GAZ" },
  { value: "87", url: "marussia", name: "Marussia" },
  { value: "79", url: "moskvich", name: "Moskvich" },
  { value: "81", url: "uaz", name: "UAZ" },
  { value: "86", url: "vaz", name: "VAZ" },
  { value: "76", url: "zaz", name: "ZAZ" }
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
        const res = await axios.get(`${BASE_URL}/fitment/model_years`, {
          params: { model_id : make.value }
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
          params: { model_id: model }
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
