import Button from "../common/forms/Button"
import brands from "../../assets/brands.png"
import brandsTyre from "../../assets/brands-tyre.svg"
const TyreBrand = () => {
    return (
        <section className="py-10 px-[120px] bg-no-repeat bg-right" style={{ backgroundImage: `url(${brandsTyre})` }}>
            <div className="text-left tracking-normal">
                <h2 className="text-black font-montserrat font-semibold text-5xl leading-[72px] mb-3">Explore Our featured Tyre brand</h2>
                <p className="font-openSans font-normal text-2xl leading-[18px]">Hurry and grab these limited-time offers before the countdown runs out.</p>
            </div>
            <div className="mt-20">
                <img src={brands} className="w-full h-full mb-10"/>
                <Button solid className="block mx-auto">Shop All Tyres brands</Button>
            </div>
        </section>
    )
}
export default TyreBrand 