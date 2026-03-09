import { useState, useEffect } from "react";
import useApi from "../../../Common-Controller/api-controller";
import { useLocation } from "react-router-dom";

const useMainProductController = () => {

    const { loading, error, request } = useApi();
    const location = useLocation()
    const [brandData, setBrandData] = useState([])
    const [varientData, setVarientData] = useState([])

    const fetchBrands = async () => {
        const data = await request(`/api/v1/tyre/brands?page=1&limit=10&sortBy=vendor_name&sortOrder=DESC`, "GET", null, true);
        if (data.success) {
            setBrandData(data.data);
        }
    };

     const fetchVarients = async () => {
        const data = await request(`/api/v1/tyre/tyre-variants/${location.state}`, "GET", null, true);
        if (data.success) {
            setVarientData(data.data);
        }
    };


    useEffect(() => {
        fetchBrands();
    }, []);

    console.log(location, "datatatata")

    return { brandData, fetchVarients, varientData };
};

export default useMainProductController;