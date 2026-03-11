import { useState, useEffect } from "react";
import useApi from "../../../Common-Controller/api-controller";

const useProductController = () => {
    // const apiKey = import.meta.env.VITE_API_KEY;
    // const apiKey = '026a371d435c0a458898282bb3b0ef39332d8e63'
    const [check, setCheck] = useState(true)
    const [brandValue, setBrandValue] = useState({ vendor_id: '' })
    const [modelValue, setModelValue] = useState({ model_id: '' })
    const [fitmentValue, setFitmentValue] = useState({ width: '', profile: '', rim: '', load_index: '', speed_rating: '', })
    const [brandByValue, setBrandByValue] = useState({})
    const [modelByValue, setModelByValue] = useState({})
    const [warehouse, setWarehouse] = useState([])
    const [wharehouseValue, setWharehouseValue] = useState({ name: '', state: '', city: '' })
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([])
    const [fitments, setFitments] = useState([])
    const [storeData, setStoreData] = useState({ price: null, stock: null, compare_price: null, description: '' })
    const [faqs, setFaqs] = useState([
        { question: "", answer: "" },
    ]);

    const { loading, error, request } = useApi();

    const fetchWarehouse = async () => {
        const data = await request('/api/v1/tyre/warehouses', "GET", null, true);
        if (data.success) {
            setWarehouse(
                data.data.map((item) => ({
                    ...item,
                    name: `${item.name} ${item.city} ${item.state}`,
                }))
            );
        }
    };

    const fetchBrands = async () => {
        const data = await request(`api/v1/tyre-addict/vendors`, "GET", null, true);
        if (data.success) {
            setBrands(
                data.data.map((item) => ({
                    ...item,
                    name: item.vendor_name,
                }))
            )
            setCheck(false);
        }
    };

    const fetchBendorById = async (brandValue) => {
        const data = await request(`api/v1/tyre-addict/vendors/${brandValue.vendor_id}`, "GET", null, true);
        if (data.success) {
            setBrandByValue(data.data);
        }
    };

    const fetchModels = async (brandValue) => {
        const data = await request(`api/v1/tyre-addict/vendors/${brandValue.vendor_id}/models`, "GET", null, true);
        if (data.success) {
            setModels(
                data.data.map((item) => ({
                    ...item,
                    name: item.model_name,
                }))
            );
        }
    };

    const fetchTyreModel = async (modelValue) => {
        const data = await request(`api/v1/tyre-addict/models/${modelValue.model_id}/model`, "GET", null, true);
        if (data.success) {
            setModelByValue(data.data);
        }
    }

    const fetchFitments = async (modelValue) => {
        const data = await request(`api/v1/tyre-addict/models/${modelValue.model_id}/specs`, "GET", null, true);
        if (data.success) {
            setFitments(
                data.data.sizes.map((item) => ({
                    value: item,
                    name: `${item.width} ${item.profile} ${item.rim} ${item.load_index} ${item.speed_rating}`,
                }))
            );
        }
    };

    const onChangeBrandValue = ((val) => {
        setBrandValue(val)
        fetchModels(val)
        fetchBendorById(val)
        setModelValue({ model_id: '' })
        setFitmentValue({ width: '', profile: '', rim: '', load_index: '', speed_rating: '', })
    })

    const onChangeModelValue = ((val) => {
        setModelValue(val)
        fetchFitments(val)
        fetchTyreModel(val)
        setCheck(true)
        setFitmentValue({ width: '', profile: '', rim: '', load_index: '', speed_rating: '', })
    })

    const onChangeWhearehouse = ((val) => {
        setWharehouseValue(val)
    })

    const onChangeFitmentValue = ((val) => {
        setFitmentValue(val)
        setCheck(true)
    })

    const onChangeMaster = (key, data) => {
        setStoreData({ ...storeData, [key]: data })
    }

    const formatTyreData = (data) => {
        return {
            vendor_id: data.vendor_id,
            vendor_name: data.vendor_name_en || data.vendor_name,

            production_flag1: data.production_flag,
            model_id: data.model_id,
            model_name: data.model_name,

            car_type: data.car_type_str,
            season_type: data.season,

            stud: data.stud_flag,
            suv_type: data.suv_type,
            moto_type: data.moto_type,

            photo_orig: [
                `https://cdn.tyresaddict.com/tyres/${data.photo_orig}`
            ],

            production_flag2: data.production_flag,

            width: data.value?.width,
            aspect_ratio: data.value?.profile,
            rim_size: data.value?.rim,
            load_index: data.value?.load_index,
            speed_rating: data.value?.speed_rating,

            price: Number(data.price),
            stock: Number(data.stock),

            warehouse_id: data.id,

            logo: `https://cdn.tyresaddict.com/vendor/${data.vendor_logo}`,

            warrenty_years: "2", // static or from API if available

            oe_flag: data.oe_flag,
            runflat_flag: data.runflat_flag,
            green_flag: data.green_flag,

            faqs: data.faqs || []
        };
    };

    const addProduct = async (setOpen) => {
        const payload = formatTyreData({ ...brandValue, ...modelValue, ...fitmentValue, ...storeData, faqs: faqs, ...brandByValue, ...modelByValue, ...wharehouseValue })
        const data = await request('/api/v1/tyre/add-tyre', "POST", payload, true);
        if (data) {
            console.log(data)
            setOpen(false)
        }
    }

    useEffect(() => {
        fetchBrands();
        fetchWarehouse()
    }, []);

    // console.log(fitmentValue,brandValue, brandByValue, modelByValue, "datatatata")

    return {
        brands,
        models,
        fitments,
        warehouse,
        loading,
        error,
        onChangeBrandValue,
        onChangeModelValue,
        onChangeFitmentValue,
        onChangeMaster,
        onChangeWhearehouse,
        storeData,
        faqs,
        setFaqs,
        addProduct,
        brandValue,
        modelValue,
        fitmentValue,
        wharehouseValue
    };
};

export default useProductController;