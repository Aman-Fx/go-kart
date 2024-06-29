import AboutSection from "../components/AboutSection";
import CommitteeSection from "../components/CommitteeSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";
import SeasonSection from "../components/SeasonSection";
import SupportSection from "../components/SupportSection";
import GalleryPage from './Gallery.page';
import VideoSection from '../components/VedioSection';

const HomePage = () => {
  return (
    <div className="relative">
      {/* <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div> */}
      <div className="top-0 h-dvh w-full z-1">
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
        <VideoSection />
      </div>
      {/* <div className="">
        <TesttimonialSection />
      </div> */}
      <div className="">
        <GallerySection />
      </div>
      <div className="">
        <SupportSection />
      </div>
      {/* <div className="relative">
        <Footer />
      </div> */}
      {/* // to be called on route */}
      <div className='relative'>
        <GalleryPage />
      </div>
      {/* <div className='relative'>
        <ContactUsPage />
      </div>
      <div className='relative'>
        <AboutUsPage />
      </div> */}

    </div>
  );
};

export default HomePage;
