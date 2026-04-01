import { useEffect, useState } from "react";

import useApi from "../Common-Controller/api-controller";
import { TYRE_DETAIL } from "./constant";
import { TyreDetailsData } from "../types/ProductDetailsType";

interface ProductDetailsType{
    id:string;
}

const useProductDetailsController = (props:ProductDetailsType):{
    productDetails:TyreDetailsData[] | [];
    loading:boolean;
} => {
    const {id}  = props;

    const [productDetails , setProductDetails] = useState<TyreDetailsData[] | []>([]);

    const {request , loading} = useApi();

    const getTyreDetails = async (id:string) => {
        try {
        const response = await request(`/api/v1/tyre/${id}`, "GET", null, true); 

        const {data , success , message} = response || {};

        if(!success){
            throw new Error(message || "Failed to fetch tyre details");
        }

        setProductDetails(data);
            
        } catch (error) {
            
        } 
    };

    useEffect(()=>{
     if(id){
        getTyreDetails(id);
     }
    },[id])

    return {
        productDetails,
        loading
    }
}

export default useProductDetailsController;