import React from "react";
import { assets } from "../assets";
import { teamData } from "../constants";

const TeamsComponent = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 font-body">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center md:mb-9 mb-5">
          <h2 className="text-primary lg:text-3xl text-xl md:text-2xl font-header">
            Meet the brains
          </h2>
        </div>

        <div className="grid grid-cols-2 text-center sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          {teamData.map((i) => (
            <React.Fragment key={i.id}>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-32 h-32 shadow-lg shadow-gray-900"
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              <div className="hidden lg:block"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsComponent;
