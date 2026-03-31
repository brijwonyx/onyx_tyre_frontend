import {
  BRAND_IMAGE_URL,
  GET_MAKE_URL,
  GET_YEAR_URL,
  POSTAL_CODE_VERIFICATION,
  TYRE_ALL_NUMBER_FITS,
  TYRE_VEHICLE,
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
  // const CREATED_URL = `${TYRE_VEHICLE}?${data}`;
  return await request({
    url: url,
    method: "GET",
  });
};
