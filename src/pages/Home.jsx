import Footer from "../components/common/layout/Footer";
import Header from "../components/common/layout/Header";
import TopBar from "../components/common/layout/TopBar";
import ContactBanner from "../components/home/ContactBanner";
import Deals from "../components/home/Deals";
import GetTyres from "../components/home/GetTyres";
import GetYourTyres from "../components/home/GetYoursTyre";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import ServicBanner from "../components/home/ServiceBanner";
import TopPicks from "../components/home/TopPicks";
import TyreBrand from "../components/home/TyreBrand";
import TyreTips from "../components/home/TyreTips";

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
      <GetYourTyres variant="white"/>
      <ContactBanner/>
    </>
  );
};
export default Home;
