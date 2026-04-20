import { useState, useCallback, useRef } from "react";
import axios from "axios";
import { getAccessToken } from "../utils/cookiesManager";
import { getGuestId } from "../utils/guest";

const API_KEY = "026a371d435c0a458898282bb3b0ef39332d8e63";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

const CallApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const request = useCallback(
    async ({ url, method = "GET", data, params = {}, headers = {} }) => {
      setLoading(true);
      setError(null);

      controllerRef.current = new AbortController();

      try {
        const token = getAccessToken();
        const guestId = getGuestId();

        const response = await axiosInstance({
          url,
          method,
          data,
          params,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "x-guest-id": guestId,
            ...headers,
          },
          signal: controllerRef.current.signal,
        });

        return response.data;
      } catch (err) {
        if (axios.isCancel(err)) {
          console.warn("Request cancelled");
        } else {
          const errorMessage =
            err.response?.data?.message ||
            err.message ||
            "Something went wrong";

          setError(errorMessage);
        }

        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const cancelRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  return {
    loading,
    error,
    request,
    cancelRequest,
  };
};

export default CallApi;
