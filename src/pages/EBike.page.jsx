import { assets } from "../assets";

function EBikePage() {
  return (
    <div className="relative h-dvh overflow-hidden bg-background">
      <img
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full md:block hidden "
        src={assets.background.ebikeDesktop} 
      />
      <img
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full block md:hidden "
        src={assets.background.ebikeMobile} 
      />
    </div>
  );
}

export default EBikePage;
