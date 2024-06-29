import CustomRightArrow from "../customComponents/CustomRightArrow";

const ContactUsPage = () => {
  return (
    <section className="bg-black min-h-dvh flex items-center font-body text-white py-20">
      <div className="container mx-auto text-center">
        <div className="flex items-center md:mb-12 mb-5">
          <CustomRightArrow />
          <h2 className="text-xl md:text-4xl text-center font-header me-4">
            Get in touch
          </h2>
          <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
        </div>
        {/* content */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3 p-4 text-start md:text-sm text-xs">
              {/* Content for the 60% section */}
              <a
                className="flex items-center gap-5 group cursor-pointer w-fit p-3"
                href="mailto:hindustanmotorsports@gmail.com"
                target="_blank"
              >
                <div className=" w-10 h-10 relative ">
                  <div className="w-full h-full blur-sm rounded-2xl z-0 custom-shadow relative animate-spin-slow"></div>
                  <div className=" flex items-center justify-center bg-gradient-to-r from-black via-gray-950 to-gray-950  w-full h-full rounded-2xl absolute top-0 left-0  z-10 group-hover:scale-110">
                    <span className="text-neutral group-hover:text-secondary">
                      <svg
                        className="h-full "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    </span>
                  </div>
                </div>

                <div>
                  <div className=" text-neutral">Email Address</div>
                  <div className=" text-secondary">
                    hindustanmotorsports@gmail.com
                  </div>
                </div>
              </a>
            </div>
            <div className="md:col-span-2 bg-neutral p-4 order-1 md:order-none">
              {/* Content for the 40% section */}
              <h2 className="text-2xl font-bold text-secondary">
                Side Content
              </h2>
              <p className="text-secondary">
                This section takes 40% of the screen on larger screens and
                reorders on small screens.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* new ui */}
    </section>
  );
};

export default ContactUsPage;
