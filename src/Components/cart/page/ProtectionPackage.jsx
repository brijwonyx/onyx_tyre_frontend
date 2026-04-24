import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import CallApi from "../../../Common-Controller/controller";

import { Trash2 } from "lucide-react";

import {
  addProtectionService,
  deleteProtectionService,
  protectionPackageApiService,
} from "../../../api/api.services";

import { useCart } from "../../../context/cardContext";

const ProtectionPackages = () => {
  const { getPreviewCart, protectionAdd } = useCart();

  const { id: protectionId } = protectionAdd?.[0] || {};

  const [protectionOptions, setProtectionOptions] = useState([]);
  const [selected, setSelected] = useState("");

  const getProtectionDataAction = CallApi();
  const addProtectionDataAction = CallApi();
  const removeProtectionDataAction = CallApi();

  const addProtectionToCart = async () => {
    // API
    try {
      const response = await addProtectionService(
        addProtectionDataAction.request,
        {
          addonIds: [selected],
        },
      );
      if (response?.success) {
        getPreviewCart();
      }
    } catch (err) {
      console.error("Add failed", err);

      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong";

      toast.error(errorMessage);
    } finally {
      //
    }
  };

  const removeProtectionToCart = async () => {
    // API
    try {
      const response = await deleteProtectionService(
        removeProtectionDataAction.request,
        {
          addonIds: selected,
        },
      );
      if (response?.success) {
        getPreviewCart();
      }
    } catch (err) {
      console.error("Add failed", err);

      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong";

      toast.error(errorMessage);
    } finally {
      //
    }
  };

  useEffect(() => {
    const fetchProtections = async () => {
      const protectionRes = await protectionPackageApiService(
        getProtectionDataAction.request,
      );
      const { data } = protectionRes || {};

      const formattedData = data?.map((item) => ({
        ...item,
        description: item.description?.split("+") || [],
      }));

      setProtectionOptions(formattedData);
    };

    fetchProtections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveProtection = () => {
    setSelected("");

    setTimeout(() => {
      removeProtectionToCart();
    }, [1000]);
  };

  // useEffect(() => {
  //   const defaultOption = protectionOptions?.find(
  //     (item) => item.name === "Basic Care Package",
  //   );

  //   if (defaultOption) {
  //     setSelected(defaultOption?.id);
  //   }
  // }, [protectionOptions]);

  const handleAddprotection = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    if (selected !== "") {
      addProtectionToCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold font-montserrat">
          Add Protection Packages
        </h2>
        {selected?.length || protectionId ? (
          <div className="relative group cursor-pointer inline-block">
            <Trash2
              className="transition-all duration-200 group-hover:text-red-500"
              onClick={() => {
                handleRemoveProtection();
              }}
            />

            <span
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                   opacity-0 group-hover:opacity-100 
                   translate-y-1 group-hover:translate-y-0
                   transition-all duration-200
                   text-red-500 text-xs px-2 py-1 rounded shadow-md whitespace-nowrap"
            >
              Remove Protection
            </span>
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {protectionOptions &&
          protectionOptions?.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleAddprotection(pkg?.id)}
              className={`relative cursor-pointer rounded-lg p-6 border transition
              ${
                protectionId === pkg?.id
                  ? "border-primary shadow-md"
                  : "border-gray-200"
              }
            `}
            >
              {/* Badge */}
              {pkg.popular && (
                <span className="absolute -top-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="font-normal font-openSans text-base">
                {pkg?.name}
              </h3>

              <p className="font-montserrat font-semibold text-4xl">
                ${pkg?.price}
              </p>

              <ul className="mt-4 px-14">
                {pkg?.description.map((f, i) => (
                  <li key={i} className="flex gap-2 font-openSans text-sm">
                    <svg
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66667 16.6667C4.73611 16.1806 3.14222 15.0728 1.885 13.3433C0.627778 11.6139 -0.000555187 9.69389 3.6808e-07 7.58333V2.5L6.66667 0L13.3333 2.5V7.58333C13.3333 9.69444 12.705 11.6147 11.4483 13.3442C10.1917 15.0736 8.59778 16.1811 6.66667 16.6667ZM6.66667 14.9167C8.11111 14.4583 9.30555 13.5417 10.25 12.1667C11.1944 10.7917 11.6667 9.26389 11.6667 7.58333V3.64583L6.66667 1.77083L1.66667 3.64583V7.58333C1.66667 9.26389 2.13889 10.7917 3.08333 12.1667C4.02778 13.5417 5.22222 14.4583 6.66667 14.9167Z"
                        fill="#2E7D32"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProtectionPackages;
