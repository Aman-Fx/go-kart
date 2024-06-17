import { assests } from "../assests";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={assests.heroSection.backGroundVedio}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative h-full bg-black bg-opacity-50 text-white p-8 flex items-center">
        <div className="flex flex-col">
          <h1 className="md:text-5xl text-2xl font-header mb-4 leading-relaxed">
            Welcome to the <br />{" "}
            <span className="text-primary">Ultimate Kart</span> <br />
            Racing Challenge
          </h1>
          <p className="md:text-xl text-lg font-body mb-8">
            Experience the thrill and excitement of high-speed kart racing.
          </p>
          <button className="px-6 py-3 w-fit rounded-lg shadow-md bg-black transition duration-300 font-header">
            Join the Race
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
