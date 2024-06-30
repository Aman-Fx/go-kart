import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

const RegistrationPage = () => {
  return (
    <section className="relative h-dvh overflow-hidden bg-background" >
      <img
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={assets.background.RegistrationPage}
      />
      <div className="relative h-full bg-black bg-opacity-10 text-secondary p-8 flex items-center justify-center">
        <div className="group bg-black bg-opacity-80  flex flex-col items-center md:p-10 p-5 rounded-2xl shadow-md shadow-primary hover:scale-105 hover:-translate-y-3 hover:shadow-NeonBlue transition duration-700">
          <div className="text-primary text-xl md:text-3xl text-center font-header md:mb-10 mb-5">
            JOIN THE JOURNEY
          </div>
          <div className="text-base md:text-lg mb-8 font-body leading-relaxed text-secondary uppercase text-center flex-grow flex md:items-start items-center">
            Get Your Registration for <br />the INDIA'S BIGGEST STUDENT'S KARTING CHAMPIONSHIP!
          </div>
          <div className="">
            <ThemeButton label="Register now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
