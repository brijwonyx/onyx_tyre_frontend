import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

import CallApi from "../../Common-Controller/controller";
import { getZipCodeCity } from "../../api/api.services";
import {
  getWithExpiry,
  setWithExpiry,
} from "../../utils/localStorageWithExpiry";

const InlineEditableField = ({ label, grey = false }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [verifiedValue, setVerifiedValue] = useState("");

  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const wrapperRef = useRef(null);
  const zipCodeApi = CallApi();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const stored = getWithExpiry("shippment_pincode");

    if (stored) {
      const label = `${stored?.region}, ${stored?.notes}, ${stored?.pincode}`;

      setVerifiedValue(label);
      setInputValue(stored?.pincode);

      // onSelect && onSelect(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCities = async () => {
    if (inputValue.length === 4 && /^\d+$/.test(inputValue)) {
      const res = await getZipCodeCity(zipCodeApi.request, {
        postal_code: inputValue,
      });

      const { data, message } = res || {};

      if (!data || data.length === 0) {
        setError(message);
        setOptions([]);
        setOpen(false);
      } else {
        setError("");
        setOptions(data);
        setOpen(true);
      }
    } else {
      setOptions([]);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (editing && !verifiedValue) {
      fetchCities();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setInputValue(val);
    setVerifiedValue("");
    setError("");
  };

  const handleSelect = (item) => {
    const label = `${item?.region}, ${item?.notes}, ${item?.pincode}`;

    setVerifiedValue(label);
    setInputValue(item?.pincode);
    setOpen(false);
    setEditing(false);
    setError("");

    setWithExpiry("shippment_pincode", item, 365 * 24 * 60 * 60 * 1000);

    // onSelect && onSelect(item);
  };

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {/* Label */}
      <p className="text-sm text-gray-600 mb-2">{label}</p>

      <div
        className={`rounded-lg px-4 py-3 flex items-center justify-between ${
          grey ? "bg-[#EAEAEA]" : "border border-[#E6E6E6] bg-white"
        }`}
      >
        {!editing ? (
          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span className="text-gray-800 font-medium">
              {verifiedValue || inputValue || "Enter pincode"}
            </span>
          </div>
        ) : (
          <input
            autoFocus
            value={verifiedValue || inputValue}
            onChange={handleChange}
            maxLength={4}
            className="bg-transparent outline-none border-b border-gray-400 w-[16rem]"
          />
        )}

        <button
          onClick={() => setEditing(!editing)}
          className="text-green-700 font-medium"
        >
          {editing ? "Cancel" : "Change"}
        </button>
      </div>

      {editing && open && (
        <div className="absolute z-10 w-full bg-white shadow max-h-60 overflow-y-auto mt-1">
          {zipCodeApi?.loading ? (
            <div className="px-4 py-2 text-gray-500">Loading...</div>
          ) : options.length > 0 ? (
            options.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSelect(item)}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100"
              >
                {`${item?.region}, ${item?.notes}, ${item?.pincode}`}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400">
              {error || "No results"}
            </div>
          )}
        </div>
      )}
      <div className="px-4 py-2 text-red-500">{error}</div>
    </div>
  );
};

export default InlineEditableField;
