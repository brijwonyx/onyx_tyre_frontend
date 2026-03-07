import { useState, useEffect } from "react";
import useApi from "../../../Common-Controller/api-controller";

const useProductController = () => {
    // const apiKey = import.meta.env.VITE_API_KEY;
    const apiKey = '026a371d435c0a458898282bb3b0ef39332d8e63'
    const [brand, setBrand] = useState([]);
    // const [data, setData] = useState({})
    const { loading, error, request } = useApi();

    const fetchBrands = async () => {
        const data = await request(`/tyres/vendors?api_key=${apiKey}&api_version=1`, "GET", null);
        if (data) {
            setBrand(
                data.map((item) => ({
                    value: item.vendor_id,
                    name: item.vendor_name,
                }))
            );
        }
    };

    const fetchModels = async () => {
        const data = await request(`/tyres/vendor_models?api_key=${apiKey}&api_version=1&vendor_id=150`, "GET", null);
        if (data) {
            setBrand(
                data.map((item) => ({
                    value: item.vendor_id,
                    name: item.vendor_name,
                }))
            );
        }
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    return { brand, loading, error };
};

export default useProductController;