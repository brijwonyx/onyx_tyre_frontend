import Button from "../common/forms/Button";
import banner from "../../assets/banner-3.jpg";

const ContactBanner = () => {
  return (
    <section className="bg-no-repeat bg-right-top bg-cover" style={{ backgroundImage: `url(${banner})` }}>
      <div className="bg-banner-green">
          <div className=" items-center text-center gap-2 py-20 px-[420px] !text-white">
            <h3 className="main-heading text-white">Contact now</h3>
            <p className="font-openSans font-semibold text-xl leading-[30px] tracking-normal">Start by entering your tyres size. Compare tyres and read reviews. Get fast delivery and fitting.</p>
            <Button solid className="mt-8">Find Tyre</Button>
          </div>
      </div>
    </section>
  );
};
export default ContactBanner;
