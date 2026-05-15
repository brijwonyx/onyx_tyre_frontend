import { useRef, useState } from "react";
import Footer from "../Components/Common/layout/Footer";
import Header from "../Components/Common/layout/Header";
import TopBar from "../Components/Common/layout/TopBar";
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
import TyreBySizeModal from "../Components/Model/tyreSizeModel";

const Home = () => {
  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen, "IsModel");

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <Deals />
      <HowItWorks />
      <ServicBanner />
      <TopPicks onScrollToHero={scrollToHero} />
      <GetTyres setIsModalOpen={setIsModalOpen} />
      <TyreBrand />
      <TyreTips />
      <GetYourTyres variant="white" />
      <ContactBanner setIsModalOpen={setIsModalOpen} />

      {isModalOpen && (
        <TyreBySizeModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};
export default Home;
