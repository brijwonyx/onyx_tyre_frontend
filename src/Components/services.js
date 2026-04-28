import { CREATE_ADDRESS } from "../api/apiRoutes";

export const createAddressApiCall = async (request , data) => {
     return await request({
    url: CREATE_ADDRESS,
    method: "POST",
    data: data,
  });
}