import { DealCard } from "./DealCard";

const Deals = () => {
  return (
    <section className="text-black py-10 px-[120px] bg-white ">
      <div>
        <h2 className="font-montserrat font-semibold text-5xl tracking-normal text-center">
          Deals & rebate
        </h2>
      </div>
      <div>
        {/* Card */}
        <div className="flex gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <DealCard
              key={index}
              image=""
              title="Fast, Free Delivery to You or Your Fitter"
              description="We’ll ship your tyres quickly and at no extra charge  straight to your installer or your home. Most orders arrive the next working day."
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Deals;
