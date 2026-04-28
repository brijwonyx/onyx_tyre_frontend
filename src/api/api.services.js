import {
  ADD_APPLY_COUPON,
  ADD_PROTECTION_PACKAGE,
  ADD_TO_CART,
  AVALIABLE_INSTALLERS,
  BOOK_TYRE_SLOT,
  BRAND_IMAGE_URL,
  GET_ADDRESS_LIST,
  GET_CART_FROM_BACKEND,
  GET_MAKE_URL,
  GET_PROTECTION_PACKAGES,
  GET_YEAR_URL,
  HOME_TYRE_SLOT,
  MERGE_CART_TO_BACKEND,
  POSTAL_CODE_VERIFICATION,
  PREVIEW_SUMMARY,
  REMOVE_APPLY_COUPON,
  REMOVE_CART,
  REMOVE_PROTECTION_PACKAGE,
  SELECT_ADDRESS_LIST,
  TYRE_ALL_NUMBER_FITS,
  UPDATE_CART,
} from "./apiRoutes";

export const getMakes = async (request) => {
  return await request({
    url: GET_MAKE_URL,
    method: "GET",
  });
};

export const getModalByMakes = async (request, id) => {
  return await request({
    url: `${GET_MAKE_URL}/${id}/models`,
    method: "GET",
  });
};

export const getYearByModel = async (request, id) => {
  return await request({
    url: `${GET_YEAR_URL}/${id}/years`,
    method: "GET",
  });
};

export const getStyleByAll = async (request, id, year) => {
  return await request({
    url: `${GET_YEAR_URL}/${id}/years/${year}/modifications`,
    method: "GET",
  });
};

export const getAllFitments = async (request, id, year, modificationId) => {
  return await request({
    url: `${GET_YEAR_URL}/${id}/years/${year}/modifications/${modificationId}/fitments`,
    method: "GET",
  });
};

export const getBrand = async (request) => {
  return await request({
    url: BRAND_IMAGE_URL,
    method: "GET",
  });
};

export const getWidthRatioDiam = async (request) => {
  return await request({
    url: TYRE_ALL_NUMBER_FITS,
    method: "GET",
  });
};

export const getZipCodeCity = async (request, data) => {
  return await request({
    url: POSTAL_CODE_VERIFICATION,
    method: "POST",
    data: data,
  });
};

export const getDetailsSearchForTyre = async (request, url) => {
  return await request({
    url: url,
    method: "GET",
  });
};

export const addToCartApiService = async (request, data) => {
  return await request({
    url: ADD_TO_CART,
    method: "POST",
    data: data,
  });
};
export const updateCartApiService = async (request, data , cartId) => {
  return await request({
    url: `${UPDATE_CART}${cartId}`,
    method: "PUT",
    data: data,
  });
};

export const getCartApiService = async (request) => {
  return await request({
    url: GET_CART_FROM_BACKEND,
    method: "GET",
  });
};

export const mergeCartApiService = async (request, data) => {
  return await request({
    url: MERGE_CART_TO_BACKEND,
    method: "POST",
    data: data,
  });
};

export const protectionPackageApiService = async (request) => {
  return await request({
    url: GET_PROTECTION_PACKAGES,
    method: "GET",
  });
};

export const removeApiService = async (request, id) => {
  return await request({
    url: `${REMOVE_CART}${id}`,
    method: "DELETE",
  });
};

export const previewSummaryService = async (request) => {
  return await request({
    url: PREVIEW_SUMMARY,
    method: "GET",
  });
};

export const addProtectionService = async (request, data) => {
  return await request({
    url: ADD_PROTECTION_PACKAGE,
    method: "POST",
    data: data,
  });
};

export const deleteProtectionService = async (request, data) => {
  return await request({
    url: REMOVE_PROTECTION_PACKAGE,
    method: "DELETE",
    data: data,
  });
};

export const addApplyCouponService = async (request, data) => {
  return await request({
    url: ADD_APPLY_COUPON,
    method: "POST",
    data: data,
  });
};

export const removeApplyCouponService = async (request, data) => {
  return await request({
    url: REMOVE_APPLY_COUPON,
    method: "POST",
    data: data,
  });
};

export const getInstallerApiService = async (request, pincode) => {
  const baseUrl = `${AVALIABLE_INSTALLERS}?pincode=${pincode}`;
  return await request({
    url: baseUrl,
    method: "GET",
  });
};

export const getHomeSlotApiService = async (
  request,
  selectedInstallerVehicle,
  date,
) => {
  const baseUrl = `${HOME_TYRE_SLOT}?installer_id=${selectedInstallerVehicle}&date=${date}`;
  return await request({
    url: baseUrl,
    method: "GET",
  });
};

export const bookHomeSlotApiService = async (request, body) => {
  const baseUrl = `${BOOK_TYRE_SLOT}`;
  return await request({
    url: baseUrl,
    method: "Post",
    data: body,
  });
};

export const getAddressApiService = async (request) => {
  const baseUrl = `${GET_ADDRESS_LIST}`;
  return await request({
    url: baseUrl,
    method: "GET",
  });
};

export const createAddressApiService = async (request, formData) => {
  const baseUrl = `${GET_ADDRESS_LIST}`;
  return await request({
    url: baseUrl,
    method: "POST",
    data: formData,
  });
};

export const selectAddressApiService = async (request, formData) => {
  const baseUrl = `${SELECT_ADDRESS_LIST}`;
  return await request({
    url: baseUrl,
    method: "POST",
    data: formData,
  });
};
