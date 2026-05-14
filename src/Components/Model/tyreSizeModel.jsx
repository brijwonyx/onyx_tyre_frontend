import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { tyreCart } from "../../context/tyreContext";

import PincodeAutocomplete from "../Common/Forms/PincodeAutocomplete";
import Button from "../common/forms/Button";
import CustomSelect from "../common/forms/CustomSelect";


const TyreBySizeModal = ({isModalOpen , setIsModalOpen}) => {
  const router = useNavigate();

  const { AlltyreSpecApi, tyreWdrOptions } = tyreCart();

  // Initial States
  const [inputZipvalue, setInputZipValue] = useState("");
  const [verifiedZipValue, setVerifiedZipValue] = useState("");

  const [selectedValue, setSelectedValue] = useState({
    width: null,
    diameter: null,
    ratio: null,
  });

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Redirection Function
  const handleRedirection = () => {
    const redirectValue = {
      size: `${selectedValue?.width?.value}/${selectedValue?.diameter?.value}R${selectedValue?.ratio?.value}`,
      userPincode: inputZipvalue,
      historyPage: "tyrebySize",
    };

    closeModal();

    router("/search?type=tyre", {
      state: redirectValue,
    });
  };

  // Handle Change
  const handleSelectChange = (field) => (option) => {
    setSelectedValue((prev) => ({
      ...prev,
      [field]: option,
    }));
  };

  // Disable Button Functionality
  const isButtonValid =
    !selectedValue?.width ||
    !selectedValue?.ratio ||
    !selectedValue?.diameter ||
    !verifiedZipValue;

  return (
    <>
      {/* Modal */}
      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tyre-size-modal-title"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-5xl rounded-2xl bg-[#063526] p-6 md:p-8 shadow-2xl border border-white/10">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2
                  id="tyre-size-modal-title"
                  className="text-2xl font-semibold text-white"
                >
                  Search Tyres By Size
                </h2>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="text-white text-3xl leading-none hover:opacity-70 transition"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 text-white w-full">
                <div className="py-2 flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <CustomSelect
                      label="Width"
                      placeholder={
                        AlltyreSpecApi?.loading
                          ? "Loading..."
                          : "Select Width"
                      }
                      options={tyreWdrOptions?.width}
                      labelKey="label"
                      value={selectedValue?.width}
                      onChange={handleSelectChange("width")}
                    />

                    <CustomSelect
                      label="Diameter"
                      placeholder={
                        AlltyreSpecApi?.loading
                          ? "Loading..."
                          : "Select Diameter"
                      }
                      options={tyreWdrOptions?.Diameter}
                      labelKey="label"
                      value={selectedValue?.diameter}
                      onChange={handleSelectChange("diameter")}
                    />

                    <CustomSelect
                      label="Ratio"
                      placeholder={
                        AlltyreSpecApi?.loading
                          ? "Loading..."
                          : "Select Ratio"
                      }
                      options={tyreWdrOptions?.Ratio}
                      labelKey="label"
                      value={selectedValue?.ratio}
                      onChange={handleSelectChange("ratio")}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-white" />
                  <span className="text-white text-base font-openSans">
                    &amp;
                  </span>
                  <div className="flex-1 h-px bg-white" />
                </div>

                {/* Pincode */}
                <PincodeAutocomplete
                  label="Enter ZIP or Postal Code to See Shipping & Installer Options:"
                  inputZipvalue={inputZipvalue}
                  setInputZipValue={setInputZipValue}
                  verifiedZipValue={verifiedZipValue}
                  setVerifiedZipValue={setVerifiedZipValue}
                />

                {/* Footer Buttons */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Button
                    solid
                    onClick={handleRedirection}
                    disabled={isButtonValid}
                  >
                    View Tyres
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default TyreBySizeModal;