import React, { Fragment } from "react";
import { assests } from "../assests";
import CustomLottie from "../customComponents/CustomLotte";
import flagAnimation from "./flag.json";

const SeasonSection = () => {
  const events = [
    {
      year: "2017",
      data: {
        id: 1,
        heading: "Season 1",
        subHeading: [
          "65 TEAMS",
          "14 AWARDS",
          "3 LAC CASH PRIZE",
          "1400+ PARTICIPANTS",
          "VENUE - PUNE",
        ],
      },
      direction: "ryt",
    },
    {
      year: "2018",
      direction: "lft",
      data: {
        id: 2,
        heading: "Season 2",
        subHeading: [
          "87 TEAMS",
          "25 AWARDS",
          "12 LAC CASH PRIZE",
          "1800+ PARTICIPANTS",
          "VENUE – KOLHAPUR",
        ],
      },
    },
    {
      year: "2019",
      direction: "ryt",
      data: {
        id: 3,
        heading: "Season 3",
        subHeading: [
          "95 TEAMS",
          "30 AWARDS",
          "12 LAC CASH PRIZE",
          "1900+ PARTICIPANTS",
          "VENUE – KOLHAPUR",
        ],
      },
    },
    {
      year: "2020",
      direction: "lft",
      data: {
        id: 4,
        heading: "Season 4",
        subHeading: [
          "62 TEAMS",
          "20 AWARDS",
          "5 LAC CASH PRIZE",
          "900+ PARTICIPANTS",
          "VENUE – KOLHAPUR",
        ],
      },
    },
    {
      year: "2023",
      direction: "ryt",
      data: {
        id: 5,
        heading: "Season 5",
        subHeading: [
          "65 TEAMS",
          "32 AWARDS",
          "6.5 LAC CASH PRIZE",
          "1000+ PARTICIPANTS",
          "4 STUDENTS PLACED",
        ],
      },
    },
    {
      year: "2024",
      direction: "lft",
      data: {
        id: 5,
        heading: "Season 6",
        subHeading: [
          "125CC / 150CC / ELECTRIC CATEGORY",
          "OPEN CATEGORY",
          "CASH PRIZE UPTO 6.5 LAKHS",
          "40+ AWARD CATEGORIES",
          "Mylaps Transponders for timing on Mobile",
          "MEDIA COVERAGE",
          "DJ NIGHT",
        ],
      },
    },
  ];
  return (
    <section className="relative h-screen  bg-gradient-to-b from-black via-gray-950 to-black py-20 px-8 flex flex-row justify-between">
      <div className="">
        <img
          src={assests.seasonSection.person}
          alt="A man"
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-y-3 w-3/5 my-4 overflow-y-scroll scrollbar-hide">
        {events?.map((event, index) => {
          return (
            <Fragment key={index}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3 items-center mx-auto">
                {event.direction == "lft" ? (
                  <EventCard
                    heading={event.data.heading}
                    content={event.data.subHeading}
                    year={event.year}
                  />
                ) : (
                  <div />
                )}

                <Pillar />

                {event.direction == "ryt" ? (
                  <EventCard
                    heading={event.data.heading}
                    content={event.data.subHeading}
                    year={event.year}
                  />
                ) : (
                  <div />
                )}
              </div>
              {index < events?.length - 1 && <Circle />}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default SeasonSection;

const Circle = () => (
  <div className=" bg-gradient-to-b from-background to-neutral  rounded-full w-4 h-4 mx-auto"></div>
);

const Pillar = () => (
  <div className="w-0.5 h-full bg-gradient-to-b from-background via-neutral to-neutral rounded-t-full rounded-b-full mx-5"></div>
);

const EventCard = ({ heading, content, year }) => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-black to-slate-900 p-6 border-2 border-neutral shadow-sm shadow-neutral hover:shadow-lg rounded-lg  md:w-80 w-auto transform transition duration-500 hover:scale-105 ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-primary md:text-3xl text-xl font-body font-bold">
            {" "}
            {year ?? "year"}
          </span>

          <CustomLottie
            lottieJson={flagAnimation}
            className={"w-20"}
            loop={true}
          />
        </div>
        <h2 className="text-accent md:text-3xl text-lg font-header mb-4">
          {heading ?? "heading"}
        </h2>
        <ul className="text-white md:text-lg text-xs font-body md:list-disc list-inside">
          {content?.map((i) => (
            <li className="tracking-wider" key={i}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
