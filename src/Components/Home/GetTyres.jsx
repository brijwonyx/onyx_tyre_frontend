import Button from "../common/forms/Button";
import banner from "../../assets/banner-2.jpg";

const GetTyres = () => {
    return (
        <>
      <section className="bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${banner})` }}>
        <div className="bg-banner-green">
          <div className=" flex flex-col items-center text-center gap-2 py-20 px-[420px] text-white">
            <h3 className="font-montserrat font-semibold text-5xl leading-[72px] tracking-normal">Get tyres now</h3>
            <p className="font-openSans font-semibold text-xl leading-[30px] tracking-normal">Start by entering your tyres size. Compare tyres and read reviews. Get fast delivery and fitting.</p>
            <Button solid>Find Tyre</Button>
          </div>
        </div>
      </section>
        </>
    );
}
export default GetTyres;