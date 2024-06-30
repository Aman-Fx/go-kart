import { assets } from "../assets";
import { aboutUs } from "../constants";

const AboutUsPage = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-950 via-gray-950 to-black sm:py-16 lg:py-24 min-h-dvh flex items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 md:gap-y-12 gap-y-5">
          <div className="relative lg:mb-12">
            <img
              loading="lazy"
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4 text-white"
              src={assets.global.dotPattern}
              alt="null"
            />
            <div className="md:pl-12 md:pr-6">
              <img
                loading="lazy" className="relative" src={aboutUs.companyLogo} alt="" />
            </div>
          </div>

          <div className="2xl:pl-16 text-secondary">
            <h2 className=" text-primary sm:text-4xl lg:text-5xl  text-xl md:text-3xl font-header md:mb-9 mb-5">
              About Us
            </h2>
            <p className="text-base md:text-lg mb-8 font-body leading-relaxed text-neutral">
              {aboutUs.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
