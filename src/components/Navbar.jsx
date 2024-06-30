import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants";

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== "/") window.scrollTo(0, 0);
  }, [pathname])

  return null
}

const NavContent = () => {
  const [isChildMenu, setIsChildMenu] = useState(false);
  const toggleChildMenu = () => {
    setIsChildMenu(!isChildMenu);
  };
  const { pathname } = useLocation();
  const isRouteActive = (route) =>
    pathname === route


  return (
    <>
      {navItems?.map((i) =>
        i?.children ? (
          <div className="relative group uppercase" key={i.id + Math.random()}>
            <span
              className="text-secondary hover:text-primary transition duration-300 flex items-center gap-x-2 cursor-pointer"
              onClick={toggleChildMenu}
            >

              <span className={pathname.includes(i?.itemName.toLowerCase()) ? `text-primary` : ""}>{i?.itemName}</span>

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
              {i?.children.map((child_item, child_Index) => (
                <li key={child_item?.childId}>
                  <Link
                    to={child_item?.route}
                    className={`block ${isRouteActive(child_item?.route) ? `text-primary` : "text-secondary"} hover:text-NeonBlue transition-colors duration-700  p-2 l ${child_Index + 1 == i?.children?.length
                      ? ""
                      : "border-b border-dashed  border-black hover:border-NeonBlue"
                      }`}
                  >
                    {child_item?.childItemName}
                  </Link>
                </li>
              ))}
            </ul>
            {/* for smaller screen */}
            <ul
              className={`top-full left-0 text-center bg-black p-2  ${isChildMenu ? "md:hidden block " : "hidden"
                }  w-auto text-nowrap rounded-lg`}
            >
              {i?.children.map((child_item) => (
                <li
                  key={child_item?.childId}
                  className={`${isRouteActive(child_item?.route) ? `text-primary` : "text-NeonBlue"} transition duration-1000  p-2 border-b-2 border-dashed border-neutral w-1/2 mx-auto`}
                >
                  <Link to={child_item?.route} className="block">
                    {child_item?.childItemName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Link
            to={i?.route}
            target={i?.externalRoute ? '_blank' : '_self'}
            className={`${isRouteActive(i?.route) ? `text-primary` : "text-secondary"} hover:text-primary transition duration-300 uppercase`}
            key={i.id + Math.random()}
          >
            {i?.itemName}
          </Link>
        )
      )}
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black md:bg-opacity-75 p-8 font-body text-white text-base hover:text-primary-red transition duration-300 font-normal ">
      <ScrollToTop />
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


