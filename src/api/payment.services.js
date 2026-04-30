import axios from "axios";

import { CREATE_ORDER } from "./apiRoutes";

export const createPaymentIntentApi = async (body) => {
  const { guest_id  , addressId} = body;

  const payload = {addressId}

  const response = await axios.post(
    CREATE_ORDER,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        "x-guest-id": guest_id || "",
      },
    },
  );

  return response.data;
};
