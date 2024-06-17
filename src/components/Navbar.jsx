import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:bg-black md:bg-opacity-75 p-8 font-body ">
      <div className="container mx-auto flex items-center justify-between">
        <div></div>
        {/* <div className="text-white text-3xl font-header">
          Racing Cart Challenge
        </div> */}
        <div className="hidden md:flex items-center space-x-6 :">
          <NavContent />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <NavContent />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const NavContent = () => {
  const [isChildMenu, setIsChildMenu] = useState(false);
  const toggleChildMenu = () => {
    setIsChildMenu(!isChildMenu);
  };
  const navItems = [
    {
      itemName: "Home",
      route: "#home",
      childs: null,
      id: 1,
    },
    {
      itemName: "About Event",
      route: "#about",
      childs: null,
      id: 2,
    },
    {
      itemName: "Season",
      route: "#season",
      id: 3,
      childs: [
        {
          childItemName: "Season 1",
          route: "season_1",
          childId: 1,
        },

        {
          childItemName: "Season 2",
          route: "season_2",
          childId: 2,
        },
        {
          childItemName: "Season 3",
          route: "season_3",
          childId: 3,
        },
        {
          childItemName: "Season 4",
          route: "season_4",
          childId: 4,
        },
        {
          childItemName: "Season 5",
          route: "season_5",
          childId: 5,
        },
        {
          childItemName: "Season 6",
          route: "season_6",
          childId: 6,
        },
      ],
    },
    {
      itemName: "MOTOR SPORT STORE",
      route: "#motor_sport_store",
      childs: null,
      id: 4,
    },

    {
      itemName: "Team Register",
      route: "#team_register",
      childs: null,
      id: 5,
    },
    {
      itemName: "Team login",
      route: "#team_login",
      childs: null,
      id: 6,
    },
    {
      itemName: "Event Media",
      route: "#event_media",
      childs: null,
      id: 7,
    },
  ];

  return (
    <>
      {navItems?.map((i, index) =>
        i.childs ? (
          <div className="relative group text-xl uppercase" key={i.id}>
            <span
              className="text-white hover:text-primary transition duration-300 flex items-center gap-x-2 cursor-pointer"
              onClick={toggleChildMenu}
            >
              <span>{i?.itemName}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            {/* for bigger screen */}
            <ul className="absolute top-full left-0 bg-black bg-opacity-85 p-2 hidden md:group-hover:block w-auto text-nowrap rounded-lg text-base">
              {i?.childs.map((child_item, child_Index) => (
                <li key={child_item?.childId}>
                  <a
                    href={child_item?.route}
                    className={`block text-white hover:text-accent transition-colors duration-700  p-2 l ${(child_Index + 1) == i?.childs?.length ? '' : 'border-b-2 border-dashed  border-black hover:border-neutral'}`}
                  >
                    {child_item?.childItemName}
                  </a>
                </li>
              ))}
            </ul>
            {/* for smaller screen */}
            <ul className={`top-full left-0 text-center bg-black p-2  ${isChildMenu ? 'md:hidden block ' : 'hidden'}  w-auto text-nowrap rounded-lg text-base`}>
              {i?.childs.map((child_item, child_Index) => (
                <li key={child_item?.childId} className="text-accent transition duration-1000  p-2 border-b-2 border-dashed border-neutral w-1/2 mx-auto">
                  <a
                    href={child_item?.route}
                    className="block"
                  >
                    {child_item?.childItemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <a
            href={i?.route}
            className="text-white hover:text-primary transition duration-300 text-xl uppercase"
            key={i.id}
          >
            {i?.itemName}
          </a>
        )
      )}
    </>
  );
};
