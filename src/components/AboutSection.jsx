import { assests } from "../assests";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import ThemeButton from "../customComponents/ThemeButton";

const AboutSection = () => {
  const cardData = [
    {
      title: "Nexus Motorsport",
      image: assests.aboutSection.NexusMotoSport,
      link: "#",
      description:
        "Indian Karting championship is India’s biggest karting challenge and known for providing 100% satisfaction in terms of transparency, racing atmosphere as well as best in class management.",
      id: 1,
    },
    {
      title: "Indian Karting championship",
      image: assests.aboutSection.IndianKarting,
      link: "#",
      description:
        "The 5th Edition is launched with the vision of shaping the young emerging undergraduates with great learning experience and to improvise the current scenario of motorsport in India and introduce rear world of motorsport to young minds",
      id: 2,
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white py-20 px-8 h-screen "
    >
      <div className="relative mx-auto">
        <div className="flex items-center mb-12">
          <CustomRightArrow /> 
          <h2 className="text-4xl font-bold text-center font-header me-4">
            About events
          </h2>
          <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 ">
            <p className="text-2xl mb-6 font-body tracking-wider text-neutral">
              IKC is an intercollegiate engineering design competition for
              undergraduate and graduate engineering students. The object of the
              competition is to implement good engineering practices, design
              projects and their related research work.Each participating
              student will learn, innovate and gain the experience of team work,
              leadership and the technical skill. The students must function as
              a team to design, engineer, build, test, promote and compete with
              a vehicle considering the few sets of rules applied by organizing
              committee.
            </p>
            <ThemeButton />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
            {cardData?.map((i) => (
              <ImageCard
                key={i?.id}
                title={i?.title}
                description={i?.description}
                image={i?.image}
                link={i?.link}
              />
            ))}
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 top-full">
          <img src={assests.aboutSection.smallKart} className="w-1/2" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;

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
        <div className="text-secondary group-hover:text-NeonBlue">{title}</div>
        <div className="truncate text-lg text-neutral group-hover:text-secondary">{description}</div>
      </div>
    </div>
  );
};
