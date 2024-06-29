import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black md:bg-opacity-75 p-8 font-body text-white text-base hover:text-primary-red transition duration-300 font-normal ">
      <div className="container mx-auto flex items-center justify-between">
        <div></div>
        <div className="hidden md:flex items-center space-x-5 :">
          <NavContent />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
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
      itemName: "About us",
      route: "#about",
      childs: null,
      id: 2,
    },
    {
      itemName: "Events",
      route: "#season",
      id: 3,
      childs: [
        {
          childItemName: "Go-karting",
          route: "go-karting",
          childId: 1,
        },

        {
          childItemName: "E-bike",
          route: "e-bike",
          childId: 2,
        },
        {
          childItemName: "Quad bike & ATV",
          route: "quad-bike-atv",
          childId: 3,
        },
      ],
    },
    {
      itemName: "Registration",
      route: "registration",
      childs: null,
      id: 4,
    },

    {
      itemName: "Downloads",
      route: "downloads",
      childs: null,
      id: 5,
    },
    {
      itemName: "Gallery",
      route: "gallery",
      childs: null,
      id: 6,
    },
    {
      itemName: "Contact us",
      route: "Contact-us",
      childs: null,
      id: 7,
    },
  ];

  return (
    <>
      {navItems?.map((i) =>
        i.childs ? (
          <div className="relative group uppercase" key={i.id}>
            <span
              className="text-secondary hover:text-primary transition duration-300 flex items-center gap-x-2 cursor-pointer"
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
            <ul className="absolute top-full left-0 bg-black bg-opacity-85 p-2 hidden md:group-hover:block w-auto text-nowrap rounded-lg">
              {i?.childs.map((child_item, child_Index) => (
                <li key={child_item?.childId}>
                  <a
                    href={child_item?.route}
                    className={`block text-secondary hover:text-NeonBlue transition-colors duration-700  p-2 l ${
                      child_Index + 1 == i?.childs?.length
                        ? ""
                        : "border-b border-dashed  border-black hover:border-NeonBlue"
                    }`}
                  >
                    {child_item?.childItemName}
                  </a>
                </li>
              ))}
            </ul>
            {/* for smaller screen */}
            <ul
              className={`top-full left-0 text-center bg-black p-2  ${
                isChildMenu ? "md:hidden block " : "hidden"
              }  w-auto text-nowrap rounded-lg`}
            >
              {i?.childs.map((child_item, child_Index) => (
                <li
                  key={child_item?.childId}
                  className="text-NeonBlue transition duration-1000  p-2 border-b-2 border-dashed border-neutral w-1/2 mx-auto"
                >
                  <a href={child_item?.route} className="block">
                    {child_item?.childItemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <a
            href={i?.route}
            className="text-secondary hover:text-primary transition duration-300 uppercase"
            key={i.id}
          >
            {i?.itemName}
          </a>
        )
      )}
    </>
  );
};
