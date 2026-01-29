import Footer from "../Components/Common/Footer/Footer";
import Header from "../Components/Common/Header/Header";
import TopBar from "../Components/Common/TopBar/topbar";
import ContactBanner from "../Components/Home/ContactBanner";
import Deals from "../Components/Home/Deals";
import GetTyres from "../Components/Home/GetTyres";
import HeroSection from "../Components/Home/HeroSection";
import HowItWorks from "../Components/Home/HowItWorks";
import ServicBanner from "../Components/Home/ServiceBanner";
import TopPicks from "../Components/Home/TopPicks";
import TyreBrand from "../Components/Home/TyreBrand";
import TyreTips from "../Components/Home/TyreTips";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Deals/>
      <HowItWorks/>
      <ServicBanner/>
      <TopPicks/>
      <GetTyres/>
      <TyreBrand/>
      <TyreTips/>
      <ContactBanner/>
    </>
  );
};
export default Home;
