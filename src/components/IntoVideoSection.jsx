import { useEffect, useRef } from "react";
import { assets } from "../assets";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import { useLocation } from "react-router-dom";
import { isLoaderShowing } from "../helper/loader";

const IntoVideoSection = () => {
  
  const videoContainerRef = useRef(null);
  const location =useLocation();
  console.log("🚀 ~ IntoVideoSection ~ location:", location)
  

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.3, // 30% visibility needed to trigger
    };
    const video = document.getElementById('myVideo');

    const handleIntersection = (entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  },[]);

  const handleSmoothScroll = () => {
    if (videoContainerRef.current) {
      const section = videoContainerRef.current;
      const yOffset = -100; // Adjust this value to set the margin-top offset
      
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Execute smooth scroll on component mount
  useEffect(() => {
    if(location.key === 'default'){
      setTimeout(() => {
        handleSmoothScroll();
      },3000)
    }
    
  }, []);

  return (

    <section href="#intro" ref={videoContainerRef} className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 pb-20 px-8">
      <div className="flex items-center md:mb-12 mb-5">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl text-white text-center font-header me-4">
          Upcoming Event
        </h2>
        <hr className="flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      <video
        className=" aspect-video w-full h-full"
        id="myVideo"
        src={assets.global.HFKC_Intro}
        loop
      ></video>
    </section>
  );
};

export default IntoVideoSection;
