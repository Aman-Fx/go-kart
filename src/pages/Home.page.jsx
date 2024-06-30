import AboutSection from "../components/AboutSection";
import CommitteeSection from "../components/CommitteeSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";
import SeasonSection from "../components/SeasonSection";
import SupportSection from "../components/SupportSection";
import GalleryPage from "./Gallery.page";
import VideoSection from "../components/VedioSection";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="top-0 h-dvh w-full z-1">
        <HeroSection />
      </div>
      <div className="">
        <SeasonSection />
      </div>
      {/* <div className="">
        <AboutSection />
      </div> */}
      <div className="">
        <ImageSlider />
      </div>
      {/* <div className="">
        <CommitteeSection />
      </div> */}
      <div className="">
        <VideoSection />
      </div>

      <div className="">
        <GallerySection />
      </div>
      <div className="">
        <SupportSection />
      </div>

      <div className="relative">
        <GalleryPage />
      </div>
    </div>
  );
};

export default HomePage;
