import { useState, useEffect, useRef } from "react";

import InputDummy from "./InputDummy";

import CallApi from "../../../Common-Controller/controller";

import { getZipCodeCity } from "../../../api/api.services";

const PincodeAutocomplete = ({
  label = "Pincode",
  onSelect,
  variant = "default",
  inputZipvalue,
  setInputZipValue,
  verifiedZipValue,
  setVerifiedZipValue,
}) => {
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataNoservicable, setDataNoServicable] = useState("");

  const wrapperRef = useRef(null);

  // Close dropdown if User outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFocus = () => {
    if (options.length > 0 && inputZipvalue.length === 4) {
      setOpen(true);
    }
  };

  const zipCodeApi = CallApi();

  const fetchCities = async () => {
    if (inputZipvalue.length === 4 && /^\d+$/.test(inputZipvalue)) {
      const dataPayload = {
        postal_code: inputZipvalue,
      };

      const AddressRes = await getZipCodeCity(zipCodeApi.request, dataPayload);
      const { data: finalAddData, message } = AddressRes || {};

      setDataNoServicable(finalAddData?.length === 0 ? message : "");

      setOptions(finalAddData || []);
      setOpen(finalAddData?.length > 0);
    } else {
      setOptions([]);
      setOpen(false);
    }
  };

  const handleZipChange = (e) => {
    setDataNoServicable("");
    setVerifiedZipValue("");
    const val = e.target.value.replace(/\D/g, "");

    setInputZipValue(val);
  };

  useEffect(() => {
    fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputZipvalue]);

  return (
    <div className="relative" ref={wrapperRef}>
      <label
        className={`font-montserrat  leading-[24px] ${variant === "dark" ? "font-medium text-[13px]" : "font-normal text-base"}`}
      >
        {label}
      </label>

      <InputDummy
        placeholder="Zip Code"
        value={verifiedZipValue || inputZipvalue}
        onChange={handleZipChange}
        onFocus={handleFocus}
        maxLength={4}
        error={dataNoservicable || zipCodeApi?.error}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 w-full bg-white shadow max-h-60 overflow-y-auto">
          {zipCodeApi?.loading ? (
            <div className="px-4 py-2 text-gray-500">Loading...</div>
          ) : options.length > 0 ? (
            options.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  const label = `${item?.region}, ${item?.notes}, ${item?.pincode}`;
                  setVerifiedZipValue(label);
                  setOpen(false);
                  onSelect && onSelect(item);
                }}
                className="px-4 py-4 cursor-pointer hover:bg-gray-100 text-black"
              >
                {`${item?.region}, ${item?.notes}, ${item?.pincode}`}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400">No cities found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default PincodeAutocomplete;
