import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SeasonSection from "../components/SeasonSection";
import AboutSection from "../components/AboutSection";
import CommitteeSection from "../components/CommitteeSection";
import VedioSection from "../components/VedioSection";
import TesttimonialSection from "../components/TesttimonialSection";
import GallerySection from "../components/GallerySection";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="overflow-visible sticky top-0 h-dvh w-full z-1">
        <HeroSection />
      </div>
      <div className="">
        <SeasonSection />
      </div>
      <div className="">
        <AboutSection />
      </div>
      <div className="">
        <ImageSlider />
      </div>
      <div className="">
        <CommitteeSection />
      </div>
      <div className="">
        <VedioSection />
      </div>
      <div className="">
        <TesttimonialSection />
      </div>
      <div className="">
        <GallerySection />
      </div>
      <div className="">
        <SupportSection />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
