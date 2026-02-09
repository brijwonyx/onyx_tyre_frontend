import { useSearchParams } from "react-router-dom";
import VehicleResults from "../components/searchResults/vehicles/VehicleResults";
import SizeResults from "../components/searchResults/size/SizeResults";
import BrandResults from "../components/searchResults/brand/BrandResults";

const SearchResults = () =>{
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    if(type === "vehicle"){
        return <VehicleResults/>
    }
    if(type === "size"){
        return <SizeResults/>
    }
    if(type === "brand") {
        return <BrandResults/>
    }

}
export default SearchResults;