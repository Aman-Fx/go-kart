import { assests } from "../assests";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const TesttimonialSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-8 h-screen">
      <div className="flex items-center mb-20">
        <CustomRightArrow />
        <h2 className="text-4xl font-bold text-center font-header me-4">
          Testimonial
        </h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-black p-px  rounded-3xl" />
      </div>
      {/* Testimonial section */}
      <div className="absolute inset-y-1/3 w-full">
        <div className=" flex items-center justify-center">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default TesttimonialSection;

const TestimonialCard = ({ name, content, profile }) => {
  return (
    <div className="group w-full max-w-80 relative font-body tracking-wider shadow-none transition-shadow duration-700 cursor-pointer">
      <div className="w-full absolute -top-5">
        <div className="bg-black w-10 h-10 rounded-full mx-auto border border-gray-800 hover:shadow-lg hover:shadow-gray-800">
          <img
            src={assests.aboutSection.smallKart}
            alt=""
            className="object-cover "
          />
        </div>
      </div>
      <div className="transition-all duration-700 text-lg  text-secondary hover:shadow-lg hover:shadow-gray-800 overflow-hidden border border-gray-800 p-5 pt-10 rounded-xl">
        <div>Best Organising and technical team Perfect management</div>
        <hr className="border border-gray-800 my-5" />
        <div className="text-center text-sm">- Rohit Gaikwad</div>
      </div>
    </div>
  );
};
