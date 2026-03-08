import { useState, useEffect } from "react";
import useApi from "../../../Common-Controller/api-controller";

const useProductController = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    // const apiKey = '026a371d435c0a458898282bb3b0ef39332d8e63'
    const [warehouse, setWarehouse] = useState([])
    const [brands, setBrands] = useState([
        {
            ...{
                "vendor_id": "136",
                "vendor_name": "Greentrac",
                "vendor_url": "greentrac",
                "production_flag": "on"
            }, name: 'Greentrac'
        }, ,
    ]);
    const [models, setModels] = useState([
        {
            ...{
                "model_id": "5279",
                "model_name": "Colo HO1",
                "model_url": "colo-ho1",
                "auto_id": "1",
                "season_id": "1"
            }, name: 'Colo HO1'
        },
    ])
    const [fitments, setFitments] = useState([
        {
            ...{
                "width": "205",
                "profile": "55",
                "rim": "16",
                "load_index": "91",
                "speed_rating": "V",
                "runflat_flag": "off",
                "xl_flag": "off",
                "c_flag": "off"
            }, name: 'qwerty'
        }
    ])
    const [allData, setAllData] = useState({
        vendor_id: '', vendor_name: '', model_id: '', model_name: '', width: '', profile: '',
        rim: '',
        load_index: '',
        speed_rating: '',
        runflat_flag: '',
        xl_flag: '',
        c_flag: '',
        warehouse_id: ''
    })
    const [storeData, setStoreData] = useState({ price: null, stock: null, compare_price: null, description: '' })
    const [faqs, setFaqs] = useState([
        { question: "", answer: "" },
    ]);
    const [venderById, setVenderById] = useState({})
    const [tyreModel, setTyreModel] = useState({})

    const { loading, error, request } = useApi();

    const fetchBrands = async () => {
        const data = await request(`/tyres/vendors?api_key=${apiKey}&api_version=1`, "GET", null, false);
        if (data) {
            fetchModels()
            fetchBendorById()
            setBrands(
                data.map((item) => ({
                    ...item,
                    name: item.vendor_name,
                }))
            );
        }
    };

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

    const fetchBendorById = async () => {
        const data = await request(`/tyres/vendor?api_key=${apiKey}&api_version=2&vendor_id=${allData.vendor_id}`, "GET", null, false);
        if (data) {
            setVenderById(data);
        }
    };

    const fetchModels = async () => {
        const data = await request(`/tyres/vendor_models?api_key=${apiKey}&api_version=1&vendor_id=${allData.vendor_id}`, "GET", null, false);
        if (data) {
            fetchFitments()
            fetchTyreModel()
            setModels(
                data.map((item) => ({
                    ...item,
                    name: item.model_name,
                }))
            );
        }
    };

    const fetchTyreModel = async () => {
        const data = await request(`/tyres/model?api_key=${apiKey}&api_version=1&model_id=${allData.model_id}`, "GET", null, false);
        if (data) {
            setTyreModel(data);
        }
    }

    const fetchFitments = async () => {
        const data = await request(`/tyres/vendor_models?api_key=${apiKey}&api_version=1&model_id=${allData.model_id}`, "GET", null, false);
        if (data) {
            setFitments(
                data.map((item) => ({
                    value: item,
                    name: `${item.width} ${item.profile} ${item.rim} ${item.load_index} ${item.speed_rating}`,
                }))
            );
        }
    };

    const onChangeHandler = (data) => {
        const tempData = data
        if (tempData.hasOwnProperty('city') && tempData.hasOwnProperty('state')) {
            setAllData({ ...allData, warehouse_id: data.id, ...data })
        } else {
            setAllData({ ...allData, ...data })
        }
    }

    const onChangeMaster = (key, data) => {
        setStoreData({ ...storeData, [key]: data })
    }

    const addProduct = async () => {
        const payload = { ...allData, ...storeData, faqs: faqs, ...venderById, ...tyreModel }
        const data = await request('/api/v1/tyre/add-tyre', "POST", payload, true);
        if (data) {
            console.log(data)
        }
    }

    useEffect(() => {
        fetchBrands();
        fetchWarehouse()
    }, []);

    console.log(allData, storeData, faqs, "datatatata")

    return { brands, models, fitments, warehouse, loading, error, onChangeHandler, onChangeMaster, allData, storeData, faqs, setFaqs, addProduct };
};

export default useProductController;