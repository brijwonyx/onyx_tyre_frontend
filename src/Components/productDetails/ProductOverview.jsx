import { Label } from "@headlessui/react";
import Tabs from "../common/Forms/tabs/Tabs";

const ProductOverview = () => {
    const tabsContent = [
        {
            label:"Overview",
            content:"Introducing the Michelin Defender LTX M/S, a tire that combines exceptional performance, durability, and comfort to enhance your driving experience in a variety of conditions. Engineered with advanced technologies and superior craftsmanship, this tire is designed to meet the demanding needs of light trucks and SUVs while delivering an impressive performance on both highways and off-road terrains.The Michelin Defender LTX M/S is built to provide outstanding all-season traction, ensuring reliable grip in wet, dry, and even light snowy conditions. Its innovative tread pattern features robust lateral grooves and sipes that efficiently channel water away from the tire's contact patch, reducing the risk of hydroplaning and maintaining excellent grip on wet roads. With its reliable tracti...",
        },
        {
            label:"Features",
            content:"Introducing the Michelin Defender LTX M/S, a tire that combines exceptional performance, durability, and comfort to enhance your driving experience in a variety of conditions.",
        },
        {
            label:"Warranty",
            content:"Introducing the Michelin Defender LTX M/S, a tire that combines exceptional performance, durability, and comfort to enhance your driving experience in a variety of conditions. Engineered with advanced technologies and superior craftsmanship, this tire is designed to meet the demanding needs of light trucks and SUVs while delivering an impressive performance on both highways and off-road terrains.The Michelin Defender LTX M/S is built to provide outstanding all-season traction, ensuring reliable grip in wet, dry, and even light snowy conditions.",
        },
        {
            label:"Specs",
            content:"Introducing the Michelin Defender LTX M/S, a tire that combines exceptional performance, durability, and comfort to enhance your driving experience in a variety of conditions. Engineered with advanced technologies and superior craftsmanship,",
        },
    ]
    return (
        <>
        <div>
            <Tabs tabs={tabsContent} />
        </div>
        </>
    )
}
export default ProductOverview;