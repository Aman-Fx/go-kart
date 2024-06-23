import CustomRightArrow from "../customComponents/CustomRightArrow";

const VedioSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20 px-8 min-h-screen">
      <div className="flex items-center md:mb-12 mb-8 ">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl font-header me-4">
          Featured videos
        </h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-full" />
      </div>
      {/* Video */}{" "}
      <div className="flex flex-wrap justify-center md:items-center gap-10 px-4 h-screen">
        <div className="md:w-[560px] sm:h-[315px] w-full rounded-2xl shadow-xl shadow-background transition duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 overflow-hidden">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/QnxW-JQ5jZM?si=jl89RnFlh4sc23H2&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="md:w-[560px] sm:h-[315px] w-full rounded-2xl shadow-xl shadow-background transition duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 overflow-hidden">
          <iframe
            className=" h-full w-full"
            src="https://www.youtube.com/embed/v1hTix2ZwEU?si=M_aHQaMz2LZ0yYrM&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VedioSection;
