import { useState } from "react";
import Button from "../../components/common/forms/Button";
import CustomSelect from "../../components/common/forms/CustomSelect";
import ContentCard from "../components/common/ContentCard";
import PageHeader from "../components/common/PageHeader";
import PageHeader2 from "../components/common/PageHeader2";
import { useNavigate } from "react-router-dom";
import tyreImg from "../../assets/tyre-item.png";
import tyreBrand from "../../assets/tyre-brand.png";
import FiltersBar from "../../components/searchResults/FilterBar";
import ProductItem from "../../components/searchResults/ProductItem";
import LineItem from "../../components/common/LineItem";
import { Heart } from "lucide-react";

const DashBoard = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [style, setStyle] = useState("");

  return (
    <>
      <PageHeader title="Dashboard" />
      <div className="px-[10px]">
        <ContentCard>
          <PageHeader2 title="Dashboard" />
          <div className="flex flex-col gap-4 text-black w-full p-3 ">
            <h5 className="font-montserrat font-medium text-xl leading-[20px] text-left ">
              Search by Vehicle
            </h5>
            <div className="grid grid-cols-4 gap-4">
              <CustomSelect
                label="Year"
                placeholder="Year"
                options={["2024", "2023", "2022"]}
                value={year}
                onChange={setYear}
                variant="dark"
              />
              <CustomSelect
                label="Make"
                placeholder="Make"
                options={["Honda", "Hyundai", "BMW"]}
                value={make}
                onChange={setMake}
                variant="dark"
              />
              <CustomSelect
                label="Model"
                placeholder="Model"
                options={["Honda", "Hyundai", "BMW"]}
                value={model}
                onChange={setModel}
                variant="dark"
              />
              <CustomSelect
                label="Style"
                placeholder="Style"
                options={["Honda", "Hyundai", "BMW"]}
                value={style}
                onChange={setStyle}
                variant="dark"
              />
            </div>

            <Button className="w-fit mx-auto mt-3" onClick="">
              View Tyres
            </Button>
          </div>
        </ContentCard>
        {/* <ContentCard>
            <div className="p-6">
              <FiltersBar />
              <ProductItem
                image={tyreImg}
                BrandImage={tyreBrand}
                name="Michelin Primacy Tour A/S"
                desc="Tailored for luxury touring vehicles, the Michelin Primacy Tour A/S combines comfort with exceptional wet and dry traction, ensuring"
                rating={4.5}
                reviews={420}
              >
                <LineItem
                  actions={{
                    quantity: true,
                    subtotal: true,
                    specs: true,
                  }}
                  className="mt-[72px]"
                />
                <div className="flex flex-col justify-end items-end mt-6">
                  <p className="font-openSans font-normal text-sm">
                    Tire Set Subtotal 
                    <span className="font-montserrat font-bold text-2xl pl-1">
                      $469.72
                    </span>
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <button className="">
                      <Heart />
                    </button>
                    <Button solid>FIND YOUR SIZE</Button>
                  </div>
                </div>
              </ProductItem>
            </div>
        </ContentCard> */}
      </div>
    </>
  );
};
export default DashBoard;
