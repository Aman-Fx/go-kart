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
    <section className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 py-20 px-8 flex xl:flex-row flex-col justify-between min-h-screen">
      <div className="md:max-w-lg xl:h-screen xl:sticky top-0 mx-auto">
        <img
          src={assests.seasonSection.person}
          alt="A man"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-3 my-4">
        {events?.map((event, index) => {
          return (
            <Fragment key={index}>
              {/* bigger screen */}
              <div className="sm:block hidden">
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
              </div>
              {/* Smaller screen */}
              <div className="block sm:hidden">
                <div className="grid grid-flow-row-dense  gap-x-3 items-center mx-auto">
                  <Pillar />
                  <div className="col-span-2">
                    <EventCard
                      heading={event.data.heading}
                      content={event.data.subHeading}
                      year={event.year}
                    />
                  </div>
                </div>
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
  <div className=" border border-NeonBlue rounded-full w-4 h-4 sm:mx-auto mx-3 shadow-sm shadow-NeonBlue"></div>
);

const Pillar = () => (
  <div className="w-px h-full bg-gradient-to-b from-gray-950 via-primary to-gray-950 rounded-t-full rounded-b-full mx-5"></div>
);

const EventCard = ({ heading, content, year }) => {
  return (
    <div className="p-6 bg-gray-950 rounded-lg shadow-xl shadow-background border border-background md:w-80 w-full transition duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 hover:border-gray-800">
      <div className="flex items-center">
        <span className="text-neutral font-header font-bold md:text-base text-sm">
          {year ?? "year"}
        </span>
      </div>
      <h3 className="text-base md:text-2xl font-header font-semibold text-NeonBlue mb-2 mt-2">
        {heading ?? "heading"}
      </h3>
      <ul className="text-white md:text-sm text-xs font-body list-disc list-inside">
        {content?.map((i) => (
          <li className="mb-2" key={i}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};
