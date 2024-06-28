import { assests } from "../assests";
import ThemeButton from "../customComponents/ThemeButton";

const HeroSection = () => {
  return (
    <section className="relative h-dvh overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={assests.heroSection.backGroundVedio}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative h-full bg-black bg-opacity-50 text-secondary p-8 flex items-center">
        <div className="flex flex-col">
          <h1 className="font-header text-4xl md:text-5xl mb-4">
            Welcome to the<br /> <span className="text-primary">Ultimate Kart</span> <br />
            Racing Challenge
          </h1>
          <p className="font-body text-lg md:text-xl mb-8">
            Experience the thrill and excitement of high-speed kart racing.
          </p>
          <div>
            <ThemeButton label="Join the race" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
