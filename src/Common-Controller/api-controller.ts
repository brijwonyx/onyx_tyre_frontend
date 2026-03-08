import { useState } from "react";
import axios from "axios";

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const mainApiUrl = import.meta.env.VITE_API_URL_MAIN;
    // const apiUrl = import.meta.env.VITE_API_URL_SECONDARY;
    // const apiKey = import.meta.env.VITE_API_KEY;

    const mainApiUrl = 'http://16.176.148.252/api'
    const apiUrl = 'https://tyresaddict.ru/api'
    const apiKey = '026a371d435c0a458898282bb3b0ef39332d8e63'

    const request = async (endpoint, method = "GET", body: any, key) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios({
                url: key ? `${mainApiUrl}${endpoint}` : `${apiUrl}${endpoint}`,
                method,
                data: body,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
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