import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const request = async (endpoint, method = "GET", body: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: `${apiUrl}${endpoint}`,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token'),
          "x-api-key": apiKey
        },
      });

      return response.data;
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, request };
};

export default useApi;