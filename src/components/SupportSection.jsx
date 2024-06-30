import { assets } from "../assets";
import CustomAutoScroll from "../customComponents/CustomAutoScroll";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const SupportSection = () => {
  const brandLogos = Object.values(assets.support);
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20 px-8 h-full">
      <div className="mb-20">
        <div className="flex items-center mb-5">
          <CustomRightArrow />
          <h2 className="text-xl md:text-4xl font-header me-4">
            Support
          </h2>
          <hr className=" flex-grow border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
        </div>
        <div className="text-base md:text-lg font-body leading-relaxed text-neutral px-4 md:mb-20 mb-8 md:w-11/12">
          Motorsport has always been one of the most challenging and enduring
          sports for mankind. The Spaark Motorsport, India’s leading company
          provides platform from children to graduates by offering wide
          opportunities in the motorsport field.
        </div>
      </div>
      <div className="md:w-3/4 mx-auto overflow-hidden md:py-20 py-10">
        <CustomAutoScroll items={brandLogos} />
      </div>
    </section>
  );
};

export default SupportSection;
