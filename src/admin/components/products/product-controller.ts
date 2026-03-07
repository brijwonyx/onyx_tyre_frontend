import { useState, useEffect } from "react";
import useApi from "../../../Common-Controller/api-controller";

const useProductController = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [brand, setBrand] = useState([]);
    const { loading, error, request } = useApi();
    console.log(apiKey, "apiKey")

    const fetchBrands = async () => {
        const data = await request(`/tyres/vendors?api_key=${apiKey}&api_version=1`, "GET", null);
        console.log(data)
        if (data) {
            setBrand(
                data.map((item) => ({
                    value: item.id,
                    name: item.name,
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