import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

const TrainingPage = () => {
  return (
    <div className="relative h-dvh overflow-hidden bg-background">
      <img
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full md:block hidden "
        src={assets.background.trainingDesktop}
      />
      <img
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full block md:hidden "
        src={assets.background.trainingMoile}
      />
    </div>
  );
};

export default TrainingPage;
