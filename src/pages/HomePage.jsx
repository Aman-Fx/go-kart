import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SeasonSection from "../components/SeasonSection";
import AboutSection from "../components/AboutSection";
import CommitteeSection from "../components/CommitteeSection";
import VedioSection from "../components/VedioSection";
import TesttimonialSection from "../components/TesttimonialSection";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="sticky top-0 h-screen w-full">
        <HeroSection />
      </div>
      <div className="sticky top-0">
        <SeasonSection />
      </div>
      <div className="sticky top-0">
        <AboutSection />
      </div>
      <div className="sticky top-0">
        <CommitteeSection />
      </div>
      <div className="sticky top-0">
        <VedioSection />
      </div>
      <div className="sticky top-0">
        <TesttimonialSection />
      </div>
    </div>
  );
};

export default HomePage;
