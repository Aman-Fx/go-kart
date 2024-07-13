import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets";

const IntoVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility needed to trigger
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  });

  return (
    <section className=" aspect-video" ref={videoRef}>
      <video
        className="w-full h-full"
        src={assets.global.HFKC_Intro}
        autoPlay = {isVisible ? true : undefined}
        loop
        
      ></video>
    </section>
  );
};

export default IntoVideoSection;
