import { useState, useEffect } from "react";
import useApi from "../../../Common-Controller/api-controller";
import { useLocation } from "react-router-dom";

const useMainProductController = () => {

    const { loading, error, request } = useApi();
    const location = useLocation()
     const [open, setOpen] = useState(false);
    const [brandData, setBrandData] = useState([])
    const [varientData, setVarientData] = useState([])
    const [brandValueData, setBrandValueData] = useState({})
    const [tyreData, setTyreData] = useState({})

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

    const fetchBrandById = async () => {
        const data = await request(`/api/v1/tyre/brands/${location.state}`, "GET", null, true);
        if (data.success) {
            setBrandValueData(data.data);
        }
    };

    const fetchGetByTyre = async () => {
        const data = await request(`/api/v1/tyre/tyres/${location.state}/variants`, "GET", null, true);
        if (data.success) {
            setTyreData(data.data);
        }
    };


    useEffect(() => {
        fetchBrands();
    }, [open]);

    return { brandData, fetchVarients, varientData, brandValueData, fetchBrandById, fetchGetByTyre, tyreData, open, setOpen };
};

export default useMainProductController;