import { assests } from "../assests";

// go kart events
export const kartEvents = [
  {
    year: "Sept 2018",
    data: {
      id: 1,
      heading: "Season 1",
      subHeading: [
        "HASTEN GO-KARTING, HYDERABAD",
        "NO. OF TEAMS :- 48",
        "PRIZE MONEY :- 5.5 LAKHS",
        "CATEGORIES- 130CC, E-KART",
      ],
    },
    direction: "ryt",
  },
  {
    year: "July 2019",
    direction: "lft",
    data: {
      id: 2,
      heading: "Season 2",
      subHeading: [
        "MIT GROUP OF INSTITUTES, UJJAIN",
        "NO. OF TEAMS :- 24",
        "PRIZE MONEY :- 3.5 LAKHS",
        "CATEGORIES – 130CC",
      ],
    },
  },
  {
    year: "Jan 2020",
    direction: "ryt",
    data: {
      id: 3,
      heading: "Season 3",
      subHeading: [
        "MET BHUJBAL KNOWLEDGE-CITY, NASHIK",
        "NO. OF TEAMS :- 29",
        "PRIZE MONEY :- 5 LAKHS",
        "CATEGORIES –  130CC, E-KART",
      ],
    },
  },
  {
    year: "July 2024",
    direction: "lft",
    data: {
      id: 4,
      heading: "Season 4",
      subHeading: [
        "MIT GROUP OF INSTITUTES, UJJAIN",
        "NO. OF TEAMS :- 26",
        "PRIZE MONEY :- 3.8 LAKHS",
        "CATEGORIES – 130CC, 160CC, E-KART",
      ],
    },
  },
  {
    year: "Jan 2025",
    direction: "ryt",
    commingSoon: true,

    data: {
      id: 5,
      heading: "Season 5",
      subHeading: [
        "PRIZE MONEY-4.5LAKHS",
        "VENUE-MOHITE’S RACING ACADEMY,KOLHAPUR",
        "REGISTRATION FEE-29,500 INR",
        "FINAL EVENT- JANUARY,2025",
      ],
    },
  },
];

export const upcommingEvents = [
  {
    id: 1,
    image: assests.seasonSection.dirtBiking,
    name: "Drit bike campionship",
  },
  {
    id: 2,
    image: assests.seasonSection.quadBiking,
    name: "Quad bike campionship",
  },
];

export const aboutUs = {
  discription:
    "Hindustan Motorsports was established back in 2015,We have been one of the trusted and prominent motorsports company. We don’t just organize events,We craft a legacy of thrilling races,our events are a celebration of skill,innovation and relentless pursuit of excellence.Join us on the track for an unparalleled racing experience that goes beyond competition.We are not just a firm, we are a community united by a passion for motorsports.",
  companyLogo: assests.global.hindustanMotorsportsLogo,
};

// for gallary image
export const images = Object.values(assests.gallery);

// For get in touch
export const contactDetails = [
  {
    id: 1,
    title: "Email Address",
    discription: "hindustanmotorsports@gmail.com",
    icon: (
      <svg
        className="h-full sm:size-[24px] size-[16px]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.7"
          d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
        />
      </svg>
    ),
    link: "mailto:hindustanmotorsports@gmail.com",
    isClickable: true,
  },
  {
    id: 2,
    title: "Call Us",
    discription: "+91 9244961751 , +91 6267 336 735",
    icon: (
      <svg
        className="h-full sm:size-[24px] size-[16px]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
        />
      </svg>
    ),
    isClickable: false,
  },
  {
    id: 3,
    title: "Address",
    discription: "Faridabad , Haryana",
    icon: (
      <svg
        className="h-full sm:size-[24px] size-[16px]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
        />
      </svg>
    ),
    isClickable: false,
  },
];
