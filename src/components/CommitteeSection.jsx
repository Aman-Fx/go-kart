import { assests } from "../assests";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import ThemeButton from "../customComponents/ThemeButton";

const CommitteeSection = () => {
  const memberData = [
    {
      id: 1,
      name: "Aniket Mind",
      profileImg: assests.committeeSection.Aniket,
      designation: "Director",
      count: 10,
      dribble: "#",
      faceBook: "#",
      linkedIn: "#",
    },
    {
      id: 2,
      name: "Azmat Hussain",
      profileImg: assests.committeeSection.Azmat,
      designation: "Convenor",
      count: 10,
      dribble: "#",
      faceBook: "#",
      linkedIn: "#",
    },
    {
      id: 2,
      name: "Abhishek Karanjule",
      profileImg: assests.committeeSection.Abhishek,
      designation: "Technical Head",
      count: 10,
      dribble: "#",
      faceBook: "#",
      linkedIn: "#",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-950 via-gray-950 to-black text-white py-20 px-8 h-screen">
      <div className="flex items-center mb-0">
        <CustomRightArrow />
        <h2 className="text-4xl font-bold text-center font-header me-4">
          Organizing committee
        </h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-black p-px  rounded-3xl" />
      </div>
      <div className="text-2xl mb-20 font-body tracking-wider text-neutral px-4">
        A team of young, experienced and creative individuals responsible for
        conducting India’s Biggest Karting Event
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        {memberData?.map((i) => (
          <ImageCard
            key={i?.id}
            title={i?.name}
            description={i?.designation}
            image={i?.profileImg}
            link={i?.link}
          />
        ))}
      </div>
      <div className="text-center mb-20">
        <ThemeButton label="View all"/>
      </div>
    </div>
  );
};

export default CommitteeSection;

const ImageCard = ({ image, title, description, link }) => {
  return (
    <div className="group w-full max-w-80 relative rounded-xl  shadow-none transition-shadow duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 overflow-hidden border border-gray-800">
      <div className="h-72 w-full overflow-hidden">
        <img
          src={image}
          alt="image"
          className="transition-all duration-700 group-hover:scale-110 ease-in-out"
        />
      </div>
      <div className="p-5 font-body tracking-wider text-xl">
        <div className="flex justify-between items-center">
          <div className="text-secondary group-hover:text-NeonBlue">
            {title}
          </div>
          <div className="flex items-center gap-3">
            <img
              src={assests.socialIcons.dribble}
              alt="Dribble"
              className="w-5 h-5 duration-200 hover:scale-125 ease-in-out"
            />
            <img
              src={assests.socialIcons.linkedIn}
              alt="LinkedIn"
              className="w-5 h-5 duration-200 hover:scale-125 ease-in-out"
            />
            <img
              src={assests.socialIcons.facebook}
              alt="facebook"
              className="w-5 h-5 duration-200 hover:scale-125 ease-in-out"
            />
          </div>
        </div>

        <div className="truncate text-lg text-neutral group-hover:text-secondary">
          {description}
        </div>
      </div>
    </div>
  );
};
