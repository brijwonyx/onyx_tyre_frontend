import { DealCard } from "./DealCard";
import tips1 from "../../assets/tips-1.png";
import tips2 from "../../assets/tips-2.png";
import tips3 from "../../assets/tips-3.png";


const TyreTips = () => {
  const tips = [
    {
      id: 1,
      image:tips1,
      title: "Why Tyre Rotation Is Important",
      description:
        "Improve tyre lifespan, handling, and fuel efficiency with regular rotation. Learn how often to do it and why it matters.",
    },
    {
      id: 2,
      image: tips2,
      title: "How to Spot and Repair a Tyre Puncture",
      description:
        "From early signs of a flat to DIY and professional repair options keep your tyres safe and road-ready.",
    },
    {
      id: 3,
      image: tips3,
      title: "Understanding Tyre Tread and When to Replace",
      description: "Stay legal and safe discover how to measure tread depth and know when it’s time for new tyres.",
    },
  ];
  return (
    <section className="bg-white py-10 px-[120px]">
      <div className="tracking-normal">
        <h3 className="main-heading">Onyx tyre tips</h3>
        <p className="sub-heading">
          Expert advice to keep your ride smooth, safe, and road-ready.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20">
        {tips.map(({id,image,title,description})=>(
        <DealCard key={id} image={image} title={title} description={description} titleClass="text-xl leading-[30px]" descriptionClass="text-base leading-[20px]"/>

        ))}
      </div>
    </section>
  );
};
export default TyreTips;
