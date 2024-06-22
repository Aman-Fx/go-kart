import { assests } from "../assests";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const GallerySection = () => {
  const images = Object.values(assests.gallery);

  return (
    <div className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white py-20 px-8 h-screen overflow-auto scrollbar-hide">
      <div className="flex items-center mb-20">
        <CustomRightArrow />
        <h2 className="text-4xl font-bold text-center font-header me-4">
          Gallery
        </h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
        {images?.map((image) => (
          <div key={image} className="group hover:shadow-lg hover:shadow-gray-800 overflow-hidden rounded-lg">
            <img className="h-auto max-w-full  transition-all duration-700 group-hover:scale-110 ease-in-out" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
