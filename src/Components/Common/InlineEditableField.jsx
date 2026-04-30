import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

import CallApi from "../../Common-Controller/controller";
import { getZipCodeCity } from "../../api/api.services";
import {
  getWithExpiry,
  setWithExpiry,
} from "../../utils/localStorageWithExpiry";

const InlineEditableField = ({ label, grey = false, fetchInstaller = false, fetchInstallerApi }) => {
const STORAGE_KEY = "shippment_pincode";

  const [editing, setEditing] = useState(false);

  // saved value (final)
  const [saved, setSaved] = useState(null);

  // draft value (while typing)
  const [inputValue, setInputValue] = useState("");

  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const zipCodeApi = CallApi();

  // -------------------------
  // Load from localStorage
  // -------------------------
  useEffect(() => {
    const stored = getWithExpiry(STORAGE_KEY);
    if (stored) {
      setSaved(stored);
      setInputValue(stored.pincode);
    }
  }, []);

  // -------------------------
  // Click outside
  // -------------------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        handleCancel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [editing]);

  // -------------------------
  // Fetch cities
  // -------------------------
  const fetchCities = async (val) => {
    if (val.length === 4 && /^\d+$/.test(val)) {
      const res = await getZipCodeCity(zipCodeApi.request, {
        postal_code: val,
      });

      const { data, message } = res || {};

      if (!data || data.length === 0) {
        setError(message || "No results");
        setOptions([]);
        setOpen(false);
      } else {
        setError("");
        setOptions(data);
        setOpen(true);
        setHighlightIndex(0);
      }
    } else {
      setOptions([]);
      setOpen(false);
      setError("");
    }
  };

  // -------------------------
  // Handle typing
  // -------------------------
  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setInputValue(val);
    fetchCities(val);
  };

  // -------------------------
  // Select option
  // -------------------------
  const handleSelect = (item) => {
    setSaved(item);
    setInputValue(item.pincode);
    setEditing(false);
    setOpen(false);
    setError("");

    setWithExpiry("shippment_pincode", item, 365 * 24 * 60 * 60 * 1000);

    if (fetchInstaller) {
      fetchInstallerApi();
    }
    
  };

  // -------------------------
  // Enter edit mode
  // -------------------------
  const handleEdit = () => {
    setEditing(true);
    setInputValue(""); // clear for fresh input
    setSaved(null);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // -------------------------
  // Cancel edit
  // -------------------------
  const handleCancel = () => {
    const stored = getWithExpiry(STORAGE_KEY);

    if (stored) {
      setSaved(stored);
      setInputValue(stored.pincode);
    } else {
      setSaved(null);
      setInputValue("");
    }

    setEditing(false);
    setOpen(false);
    setError("");
  };

  // -------------------------
  // Keyboard support
  // -------------------------
  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) =>
        prev < options.length - 1 ? prev + 1 : prev,
      );
    }

    if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (options[highlightIndex]) {
        handleSelect(options[highlightIndex]);
      }
    }

    if (e.key === "Escape") {
      handleCancel();
    }
  };

  const displayValue = saved
    ? `${saved.region}, ${saved.notes}, ${saved.pincode}`
    : "Enter pincode";

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {/* Label */}
      <p className="text-sm text-gray-600 mb-2">{label}</p>

      <div
        className={`rounded-lg px-4 py-3 flex items-center justify-between ${grey ? "bg-[#EAEAEA]" : "border border-[#E6E6E6] bg-white"
          }`}
      >
        {!editing ? (
          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span className="text-gray-800 font-medium">{displayValue}</span>
          </div>
        ) : (
          <input
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={6}
            inputMode="numeric"
            aria-label="Enter pincode"
            className="bg-transparent outline-none border-b border-gray-400 w-[16rem]"
          />
        )}

        <button
          onClick={editing ? handleCancel : handleEdit}
          className="text-green-700 font-medium"
        >
          {editing ? "Cancel" : "Change"}
        </button>
      </div>

      {/* Dropdown */}
      {editing && open && (
        <div className="absolute z-10 w-full bg-white shadow max-h-60 overflow-y-auto mt-1 border rounded-md">
          {zipCodeApi?.loading ? (
            <div className="px-4 py-2 text-gray-500">Loading...</div>
          ) : (
            options.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSelect(item)}
                className={`px-4 py-3 cursor-pointer ${
                  i === highlightIndex ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                {`${item.region}, ${item.notes}, ${item.pincode}`}
              </div>
            ))
          )}
        </div>
      )}

      {/* Error */}
      {editing && error && (
        <div className="px-2 pt-1 text-sm text-red-500">{error}</div>
      )}
    </div>
  );
};

export default InlineEditableField;
