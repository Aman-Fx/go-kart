import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

function DownloadsPage() {
  return (
    <section className="relative h-dvh overflow-hidden bg-black">
      <img
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={assets.background.DownloadPage}
      />
      <div className="relative h-full bg-black bg-opacity-10 text-secondary p-8 flex items-center justify-center">
        <div className="group bg-black bg-opacity-80  flex flex-col items-center md:p-10 p-5 rounded-2xl shadow-md shadow-primary hover:scale-105 hover:-translate-y-3 hover:shadow-NeonBlue transition duration-700">
          <div className="text-primary text-xl md:text-3xl text-center font-header md:mb-10 mb-5">
            DOWNLOADS
          </div>

          <div className="flex gap-5 justify-center flex-wrap items-center mx-auto">
            <a href="https://drive.google.com/file/d/17oItk-68lWxqY8bhMzx881yGZaMw7I2M/view" target="_blank">

              <ThemeButton label="Rule Book" />
            </a>
            <a href="https://drive.google.com/file/d/1FJyB4RkziZ8dPnmPt3QKgbGufYdGR6gD/view" target="_blank">
              <ThemeButton label="Brochure" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadsPage;
