import React from "react";
import { assets } from "../assets";
import { teamData } from "../constants";

const TeamsComponent = () => {
  const higherAuthorities = teamData.slice(0, 9);
  const officials = teamData.slice(9,15);
  const ambassador = teamData.slice(15,17);
  const coordinator = teamData.slice(17,22);
  const volunteer = teamData.slice(22);

  
  return (
    <section className="py-10 sm:py-16 lg:py-24 font-body">
      <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center md:mb-9 mb-5">
          <h2 className="text-primary lg:text-3xl text-xl md:text-2xl font-header">
            Meet the brains
          </h2>
        </div>

        {/* higherAuthorities */}
        <div className="grid grid-cols-1 text-center sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-x-10 mx-auto mb-8">
          {higherAuthorities.map((i) => (
            <React.Fragment key={i.id}>
              <div className="">
                <img
                  className={`object-cover mx-auto rounded-lg shadow-lg w-52 aspect-square shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 h-10 text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
        {/* general members */}
        <div className="grid grid-cols-2 text-center sm:grid-cols-4 gap-y-8 lg:grid-cols-7 gap-x-10 mx-auto mb-8">
          {officials.map((i) => (
            <React.Fragment key={i.id}>
              <div>
                <img
                  className={`object-cover mx-auto rounded-lg w-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 h-10  text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div> 
        <div className="grid grid-cols-2 text-center sm:grid-cols-4 gap-y-8 lg:grid-cols-7 gap-x-10 mx-auto mb-8">
          {ambassador.map((i) => (
            <React.Fragment key={i.id}>
              <div>
                <img
                  className={`object-cover mx-auto rounded-lg w-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 h-10  text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 text-center sm:grid-cols-4 gap-y-8 lg:grid-cols-7 gap-x-10 mx-auto mb-8">
          {coordinator.map((i) => (
            <React.Fragment key={i.id}>
              <div>
                <img
                  className={`object-cover mx-auto rounded-lg w-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 h-10  text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div> <div className="grid grid-cols-2 text-center sm:grid-cols-4 gap-y-8 lg:grid-cols-7 gap-x-10 mx-auto mb-8">
          {volunteer.map((i) => (
            <React.Fragment key={i.id}>
              <div>
                <img
                  className={`object-cover mx-auto rounded-lg w-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 h-10  text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsComponent;
