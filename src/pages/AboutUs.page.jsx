
import { aboutUs } from "../constants";

const AboutUsPage = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-gray-950 via-gray-950 to-black sm:py-16 lg:py-24 min-h-dvh flex items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4 text-white"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt=""
            />
            <div className="pl-12 pr-6">
              <img className="relative" src={aboutUs.companyLogo} alt="" />
            </div>
          </div>

          <div className="2xl:pl-16 text-secondary">
            <h2 className="text-3xl font-header leading-tight text-primary sm:text-4xl lg:text-5xl lg:leading-tight">
              About Us
            </h2>
            <p className="text-xl leading-relaxed  mt-9">
              {aboutUs.discription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
