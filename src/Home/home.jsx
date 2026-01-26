import Footer from "../Components/Common/Footer/Footer";
import Header from "../Components/Common/Header/Header";
import TopBar from "../Components/Common/TopBar/topbar";
import Deals from "../Components/Home/Deals";
import HowItWorks from "../Components/Home/HowItWorks";

const Home = () => {
  return (
    <>
      <section className="h-[400px] bg-gradient-green">
        <div className="container flex py-6 px-8">
        <h1 className="text-white text-[56px] font-bold ">Buy Tyres Online. Fit Locally. Drive Happy.</h1>

        </div>
      </section>
      <Deals/>
      <HowItWorks/>
    </>
  );
};
export default Home;
