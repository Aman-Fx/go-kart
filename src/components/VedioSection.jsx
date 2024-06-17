import CustomRightArrow from "../customComponents/CustomRightArrow";

const VedioSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-950 via-gray-950 to-black text-white py-20 px-8 h-screen">
      <div className="flex items-center mb-20">
        <CustomRightArrow />
        <h2 className="text-4xl font-bold text-center font-header me-4">
          Featured videos
        </h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-black p-px  rounded-3xl" />
      </div>
      {/* Video */}{" "}
      <div className="flex flex-wrap justify-center  items-center gap-10 px-4">
        <div className="md:w-[560px] sm:h-[315px] w-full">
          <iframe
            className="sm:shadow-lg shadow-sm shadow-gray-800 rounded-xl border border-gray-800 h-full w-full"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/QnxW-JQ5jZM?si=jl89RnFlh4sc23H2&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="md:w-[560px] sm:h-[315px] w-full">
          <iframe
            className="sm:shadow-lg shadow-sm shadow-gray-800 rounded-xl border border-gray-800 h-full w-full"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/v1hTix2ZwEU?si=M_aHQaMz2LZ0yYrM&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VedioSection;
