import { GET_MAKE_URL, GET_YEAR_URL } from "./apiRoutes";

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
