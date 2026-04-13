import {
  ADD_TO_CART,
  BRAND_IMAGE_URL,
  GET_CART_FROM_BACKEND,
  GET_MAKE_URL,
  GET_YEAR_URL,
  MERGE_CART_TO_BACKEND,
  POSTAL_CODE_VERIFICATION,
  TYRE_ALL_NUMBER_FITS,
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
