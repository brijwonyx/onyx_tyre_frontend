import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Input from "../../Common/Forms/Input";
import ShimmerCard from "../../Common/Forms/Shimmer";
import CustomSelect from "../../common/forms/CustomSelect";

import CallApi from "../../../Common-Controller/controller";

import {
  createAddressApiService,
  getAddressApiService,
  selectAddressApiService,
} from "../../../api/api.services";

import toast from "react-hot-toast";

import { stateOptions } from "./constant";
import { useCart } from "../../../context/cardContext";

const initialState = {
  name: "",
  email: "",
  phone: "",
  pincode: "",
  state: "",
  street_address: "",
  address_line1: "",
  suburb: "",
  is_default: false,
};

const ShippingForm = () => {
  const navigate = useNavigate();

  const { getPreviewCart } = useCart();

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [view, setView] = useState("list");

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [apiAddresses, setApiAddresses] = useState([]);

  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectAddressLoader, setSelectAddressLoader] = useState(false);

  const [addOptionalAddress, setAddOptionalAddress] = useState(false);

  const addressListAction = CallApi();
  const createAddressAction = CallApi();
  const selectAddressAction = CallApi();

  const shimmerMap = new Array(3).fill(null);

  // ================= FETCH ADDRESS =================

  const fetchAddressList = async () => {
    try {
      setLoader(true);

      const res = await getAddressApiService(addressListAction.request);

      if (!res?.success) {
        throw new Error("Failed to fetch addresses");
      }

      setApiAddresses(res?.data || []);
    } catch (err) {
      setApiAddresses([]);
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchAddressList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ================= EFFECTIVE SELECTED =================

  const effectiveSelectedId = useMemo(() => {
    return (
      selectedAddressId ??
      apiAddresses.find((a) => a.is_default)?.id ??
      apiAddresses[0]?.id ??
      null
    );
  }, [selectedAddressId, apiAddresses]);

  // ================= VALIDATION =================

  const getErrors = (data) => {
    const newErrors = {};

    const requiredFields = [
      "name",
      "email",
      "phone",
      "pincode",
      "state",
      "suburb",
      "street_address",
    ];

    requiredFields.forEach((field) => {
      const value = data[field];

      if (typeof value === "string" && !value.trim()) {
        newErrors[field] = "This field is required";
      }

      if (value == null) {
        newErrors[field] = "This field is required";
      }
    });

    // EMAIL
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    // PHONE
    if (data.phone && !/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    // PINCODE
    if (data.pincode && !/^\d{4}$/.test(data.pincode)) {
      newErrors.pincode = "Enter valid 4 digit pincode";
    }

    return newErrors;
  };

  // ================= LIVE VALIDATION =================

  useEffect(() => {
    setErrors(getErrors(formData));
  }, [formData]);

  const isFormValid = Object.keys(errors).length === 0;

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // NAME
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return;
    }

    // PHONE
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }

    // PINCODE
    if (name === "pincode" && (!/^\d*$/.test(value) || value.length > 4)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= BLUR =================

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // ================= SUBMIT =================

  const handleSubmit = async () => {
    const validationErrors = getErrors(formData);

    setErrors(validationErrors);

    // touch all fields
    const touchedFields = {};

    Object.keys(formData).forEach((key) => {
      touchedFields[key] = true;
    });

    setTouched(touchedFields);

    if (Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors)[0];

      document.querySelector(`[name="${firstField}"]`)?.focus();

      return;
    }

    try {
      setLoadingCreate(true);

      const payload = {
        ...formData,
        state: formData.state?.value || "",
      };

      const res = await createAddressApiService(
        createAddressAction.request,
        payload,
      );

      if (!res?.success) {
        throw new Error(res?.message || "Failed to create address");
      }

      toast.success("Address added successfully");

      await fetchAddressList();

      setFormData(initialState);
      setTouched({});
      setErrors({});

      setView("list");
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Something went wrong");
    } finally {
      setLoadingCreate(false);
    }
  };

  // ================= SELECT ADDRESS =================

  const handleSelectAddress = async () => {
    try {
      setSelectAddressLoader(true);

      const res = await selectAddressApiService(selectAddressAction.request, {
        addressId: effectiveSelectedId,
      });

      if (!res?.success) {
        throw new Error("Failed");
      }
      getPreviewCart();
      navigate("/checkout/payment");
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setSelectAddressLoader(false);
    }
  };

  // ================= ADDRESS LIST =================

  if (view === "list") {
    return (
      <section
        className="p-6 border rounded-xl bg-gray-50 space-y-6"
        aria-labelledby="saved-address-heading"
      >
        <h2 id="saved-address-heading" className="text-2xl font-bold">
          Select Address
        </h2>

        <fieldset className="flex gap-4 flex-col">
          <legend className="sr-only">Saved addresses</legend>

          {loader
            ? shimmerMap.map((_, index) => (
                <ShimmerCard className="h-[150px] rounded-lg" key={index} />
              ))
            : apiAddresses.map((addr) => (
                <label
                  key={addr.id}
                  className={`flex gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    effectiveSelectedId === addr.id
                      ? "border-primary bg-green-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="address"
                    checked={effectiveSelectedId === addr.id}
                    onChange={() => setSelectedAddressId(addr.id)}
                    className="mt-1"
                  />

                  <div>
                    <p className="font-semibold flex gap-2 items-center">
                      {addr.name}

                      {addr.is_default && (
                        <span className="text-xs bg-black text-white px-2 py-1 rounded">
                          Default
                        </span>
                      )}
                    </p>

                    <p className="text-sm text-gray-600">
                      {addr.street_address}, {addr.suburb}, {addr.state} -{" "}
                      {addr.pincode}
                    </p>

                    <p className="text-sm text-gray-700">{addr.phone}</p>
                  </div>
                </label>
              ))}
        </fieldset>

        <button
          type="button"
          onClick={() => setView("form")}
          className="w-full border border-dashed py-3 rounded-lg hover:bg-gray-100 transition"
        >
          + Add New Address (Optional)
        </button>

        <button
          type="button"
          disabled={!effectiveSelectedId || selectAddressLoader}
          onClick={handleSelectAddress}
          className={`w-full py-3 rounded-full text-white transition ${
            effectiveSelectedId && !selectAddressLoader
              ? "bg-primary"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {selectAddressLoader ? "Loading..." : "CONTINUE TO PAYMENT →"}
        </button>
      </section>
    );
  }

  // ================= FORM =================

  return (
    <section className="border rounded-xl p-8 bg-gray-50">
      <div className="border-t border-black">
        <div className="w-10 bg-primary h-[2px]" />

        <h2 className="text-2xl font-bold font-montserrat my-3">
          Shipping Information
        </h2>

        <p className="text-sm text-black font-openSans">
          Please enter your shipping information and confirm a few additional
          details for your order.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Input
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          aria-invalid={!!errors.email}
          placeholder="user@gmail.com"
        />

        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          aria-invalid={!!errors.name}
          placeholder="Full Name"
        />
      </div>

      <Input
        label="Street Address"
        name="street_address"
        value={formData.street_address}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.street_address && errors.street_address}
        aria-invalid={!!errors.street_address}
        placeholder="Street Address"
      />

      <div className="mb-4">
        {addOptionalAddress ? (
          <Input
            label="Address Line"
            name="address_line"
            value={formData.address_line1}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address_line1 && errors.address_line1}
            aria-invalid={!!errors.address_line1}
            placeholder="Address Line"
          />
        ) : (
          <button
            type="button"
            className="text-blue-500"
            onClick={() => setAddOptionalAddress(true)}
          >
            + Add address line
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Suburb"
          name="suburb"
          value={formData.suburb}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.suburb && errors.suburb}
          aria-invalid={!!errors.suburb}
          placeholder="Suburb"
        />

        <CustomSelect
          label="State"
          placeholder="Select State"
          options={stateOptions}
          value={formData.state}
          onChange={(option) =>
            setFormData((prev) => ({
              ...prev,
              state: option,
            }))
          }
          className="border w-full h-[58px] rounded-md"
          labelKey="label"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Postcode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.pincode && errors.pincode}
          aria-invalid={!!errors.pincode}
          placeholder="ZIP/Postal Code"
        />

        <Input
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && errors.phone}
          aria-invalid={!!errors.phone}
          placeholder="04XXXXXXXX"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="default-address"
          type="checkbox"
          name="is_default"
          checked={formData.is_default}
          onChange={handleChange}
        />

        <label htmlFor="default-address">Save as default address</label>
      </div>

      {!isFormValid && (
        <p className="text-sm text-red-500 mt-4" role="alert">
          Please fill all required fields correctly.
        </p>
      )}

      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={() => setView("list")}
          className="px-6 py-2 border rounded-full"
        >
          BACK
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid || loadingCreate}
          className={`px-6 py-2 rounded-full text-white transition ${
            isFormValid && !loadingCreate
              ? "bg-primary"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loadingCreate ? "Saving..." : "Save Address"}
        </button>
      </div>
    </section>
  );
};

export default ShippingForm;
