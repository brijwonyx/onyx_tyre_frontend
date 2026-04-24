import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Input from "../../Common/Forms/Input";

import CallApi from "../../../Common-Controller/controller";
import {
  createAddressApiService,
  getAddressApiService,
  selectAddressApiService,
} from "../../../api/api.services";
import toast from "react-hot-toast";
import ShimmerCard from "../../Common/Forms/Shimmer";

const initialState = {
  name: "",
  email: "",
  phone: "",
  pincode: "",
  state: "",
  city: "",
  address_line1: "",
  landmark: "",
  address_line2: "",
  address_type: "",
  is_default: false,
};

const ShippingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [view, setView] = useState("list");

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [apiAddresses, setApiAddresses] = useState([]);

  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loader , setLoader] = useState(false);
  const [selectAddressLoader , setSelectAddressLoader] = useState(false)

  const addressListAction = CallApi();
  const createAddressAction = CallApi();
  const selectAddressAction = CallApi();

  const shimmerMap = new Array(3).fill(null);

  console.log(selectedAddressId , 'selectAddressId')

  const fetchAddressList = async () => {
    try {
      setLoader(true);
      const res = await getAddressApiService(addressListAction.request);

      if (!res.success) {
        throw new Error("Failed");
      }

      setApiAddresses(res?.data);
    } catch (err) {
      setApiAddresses([]);
      toast.success("Something going wrong");
      console.error("Something going wrong", err);
    }finally{
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchAddressList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAddress = async () => {
    try {
      setSelectAddressLoader(true);
      const res = await selectAddressApiService(selectAddressAction.request, {
        addressId: selectedAddressId ?? effectiveSelectedId,
      });

      if (!res.success) {
        throw new Error("Failed");
      }

      setTimeout(() => {
        navigate("/checkout/payment");
      }, 1000);
    } catch (err) {
      toast.error("Something going wrong");
      console.error("Something going wrong", err);
    }finally{
      setSelectAddressLoader(false);
    }
  };

  //   // ---------------- DERIVED DEFAULT ----------------
  const effectiveSelectedId =
    selectedAddressId ??
    apiAddresses.find((a) => a.is_default)?.id ??
    apiAddresses[0]?.id ??
    null;

  // ---------------- PURE VALIDATION ----------------
  const getErrors = (data) => {
    const newErrors = {};

    const requiredFields = [
      "name",
      "email",
      "phone",
      "pincode",
      "state",
      "city",
      "address_line1",
    ];

    requiredFields.forEach((field) => {
      if (!data[field]?.trim()) {
        newErrors[field] = "This field is required";
      }
    });

    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (data.phone && !/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Enter valid 10 digit phone";
    }

    if (data.pincode && !/^\d{6}$/.test(data.pincode)) {
      newErrors.pincode = "Enter valid 6 digit pincode";
    }

    return newErrors;
  };

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) return;
    if (name === "pincode" && (!/^\d*$/.test(value) || value.length > 6))
      return;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ---------------- BLUR ----------------
  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const newErrors = getErrors(formData);
    setErrors(newErrors);
  };

  // ---------------- FORM VALID ----------------
  const currentErrors = getErrors(formData);
  const isFormValid = Object.keys(currentErrors).length === 0;

  const handleSubmit = async () => {
    const newErrors = getErrors(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstField = Object.keys(newErrors)[0];
      document.querySelector(`[name="${firstField}"]`)?.focus();
      return;
    }

    try {
      setLoadingCreate(true);

      const res = await createAddressApiService(
        createAddressAction.request,
        formData,
      );

      if (!res?.success) {
        throw new Error(res?.message || "Failed to create address");
      }

      toast.success("Address added successfully");

      const newAddress = res?.data || {
        id: Date.now().toString(),
        ...formData,
      };

      setApiAddresses((prev) => {
        if (newAddress.is_default) {
          return [
            ...prev.map((a) => ({ ...a, is_default: false })),
            newAddress,
          ];
        }
        return [...prev, newAddress];
      });

      setSelectedAddressId(newAddress.id);

      setFormData(initialState);
      setTouched({});
      setView("list");
    } catch (err) {
      console.error("Create address failed", err);
      toast.error(err?.message || "Something went wrong");
    } finally {
      setLoadingCreate(false);
    }
  };

  // ================= LIST =================
  if (view === "list") {
    return (
      <div className="p-6 border rounded-xl bg-gray-50 space-y-6">
        <h2 className="text-2xl font-bold">Select Address</h2>
        <div>
          <fieldset className="flex gap-4 flex-col">
            <legend className="sr-only">Saved addresses</legend>

            {loader ? 
            shimmerMap.map((_,index)=>(
              <ShimmerCard className="h-[150px] rounded-lg" key={index} />
            )) : apiAddresses.map((addr) => (
              <button
                key={addr.id}
                className={`flex gap-3 p-4 border rounded-lg cursor-pointer ${
                  effectiveSelectedId === addr.id
                    ? "border-primary bg-green-50"
                    : ""
                }`}
                onClick={() => {
                    setSelectedAddressId(addr.id)
                  }}
              >
                <input
                  type="radio"
                  name="address"
                  checked={effectiveSelectedId === addr.id}
                />

                <div>
                  <p className="font-semibold flex gap-2">
                    {addr.name}
                    {addr.is_default && (
                      <span className="text-xs bg-black text-white px-2 rounded flex justify-center items-center">
                        Default
                      </span>
                    )}
                  </p>

                  <p className="text-sm text-gray-600">
                    {addr.address_line1}, {addr.city}, {addr.state} -{" "}
                    {addr.pincode}
                  </p>

                  {addr.landmark && (
                    <p className="text-xs text-gray-400 text-start">{addr.landmark}</p>
                  )}

                  <p className="text-sm text-start">{addr.phone}</p>
                </div>
              </button>
            ))}
          </fieldset>
        </div>

        <button
          onClick={() => setView("form")}
          className="w-full border border-dashed py-3 rounded-lg"
        >
          + Add New Address
        </button>

        <button
          disabled={!effectiveSelectedId || selectAddressLoader}
          // onClick={() => navigate("/checkout/payment")}
          onClick={() => {
            handleSelectAddress();
          }}
          className={`w-full py-3 rounded-full text-white ${
            effectiveSelectedId && !selectAddressLoader ? "bg-primary" : "bg-gray-400"
            // !selectAddressLoader ? "bg-primary"  : 'bg-gray-400'
          }`}
        >
        {selectAddressLoader ? 'loading...' : 'CONTINUE TO PAYMENT →'}
        </button>
      </div>
    );
  }

  // ---------------- UI ----------------
  return (
    <div className="border rounded-xl p-8 bg-gray-50 space-y-6">
      <div className="border-t border-black ">
        <div className="w-10 bg-primary h-[2px]"></div>
        <h2 className="text-2xl font-bold font-montserrat my-3">
          Shipping Information
        </h2>
        <p className="text-sm text-black font-openSans ">
          Please enter your shipping information and confirm a few additional
          details for your order.
        </p>
      </div>

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
        placeholder="Full Name"
      />

      <Input
        label="Address Line 1"
        name="address_line1"
        value={formData.address_line1}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.address_line1 && errors.address_line1}
        placeholder="Address Line 1"
      />

      <Input
        label="Address Line 2"
        name="address_line2"
        value={formData.address_line2}
        onChange={handleChange}
        placeholder="Address Line 2 (alternate)"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Landmark"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.landmark && errors.landmark}
          placeholder="Landmark"
        />
        <Input
          label="Address type"
          name="address_type"
          value={formData.address_type}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.city && errors.city}
          placeholder="office / house"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Input
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.pincode && errors.pincode}
          placeholder="ZIP/Postal Code"
        />

        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.city && errors.city}
          placeholder="City"
        />

        <Input
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.state && errors.state}
          placeholder="State"
        />
      </div>

      <Input
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phone && errors.phone}
        placeholder="+61 04*** *** ***"
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="is_default"
          checked={formData.is_default}
          onChange={handleChange}
        />
        <span>Save as default address</span>
      </div>

      {/* GLOBAL MESSAGE */}
      {!isFormValid && (
        <p className="text-sm text-red-500 text-right">
          Please fill all required fields correctly
        </p>
      )}

      <div className="flex justify-end gap-4">
        <button
          onClick={() => setView("list")}
          className="px-6 py-2 border rounded-full"
        >
          BACK
        </button>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`px-6 py-2 rounded-full text-white ${
            isFormValid ? "bg-primary" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loadingCreate ? "Saving..." : "Save Address"}
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
