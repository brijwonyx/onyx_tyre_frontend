import Footer from "../components_tempCommon/Footer/Footer";
import Header from "../components_tempCommon/Header/Header";
import TopBar from "../components_tempCommon/TopBar/topbar";
import ContactBanner from "../components_tempHome/ContactBanner";
import Deals from "../components_tempHome/Deals";
import GetTyres from "../components_tempHome/GetTyres";
import HeroSection from "../components_tempHome/HeroSection";
import HowItWorks from "../components_tempHome/HowItWorks";
import ServicBanner from "../components_tempHome/ServiceBanner";
import TopPicks from "../components_tempHome/TopPicks";
import TyreBrand from "../components_tempHome/TyreBrand";
import TyreTips from "../components_tempHome/TyreTips";

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
