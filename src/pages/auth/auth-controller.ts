import { useState } from "react";
import useApi from "../../Common-Controller/api-controller";
import { useNavigate } from "react-router-dom";

const useAuthController = () => {

    const { loading, error, request } = useApi();
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        identifier: '', password: ''
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await request(`/api/v1/auth/login`, "POST", loginData, true);
        console.log("data", data)
        if (data.success) {
            localStorage.setItem('token', data.data)
            navigate('/admin/products')
        }
    };

     const onChangeHandler = (key, data) => {
        setLoginData({ ...loginData, [key]: data })
    }


    console.log(loginData, "datatatata")

    return { loginData, handleLogin, onChangeHandler };
};

export default useAuthController;