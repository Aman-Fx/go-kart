import { assests } from "../assests";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-black to-black border-t border-gray-900 font-body ">
      <div className="mx-auto w-full px-8 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="text-neutral md:text-base text-sm flex md:flex-row flex-col md:items-center gap-3 mb-6">
            <div>
              <img
                src={assests.global.ick_logo}
                className="md:h-28 h-24"
                alt="Indian Karting Logo"
              />
            </div>
            <div>
              IKC is an intercollegiate engineering design 
              <br className="md:block hidden" />competition for undergraduate and graduate
              <br className="md:block hidden" /> engineering students.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="md:mb-6 mb-4 md:text-base text-sm text-white uppercase">
                Quick Links
              </h2>
              <ul className="text-neutral font-medium [&_li]:md:mb-4 [&_li]:mb-2 md:text-sm text-xs">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="md:mb-6 mb-4 md:text-base text-sm text-white uppercase">
                Recent Posts
              </h2>
              <ul className="text-neutral font-medium [&_li]:md:mb-4 [&_li]:mb-2 md:text-sm text-xs">
                <li>
                  <a href="/" className="hover:underline">
                    Nexus Motorsport
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    Indian Karting championship
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-900 lg:my-8" />
        {/* Bottom line */}
        <div className="text-gray-500 flex md:items-center md:flex-row flex-col gap-4 sm:justify-between">
          <span className="text-sm">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Indian Karting
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex gap-3 items-center md:text-sm text-xs">
            <a
              href="tel:8788746228"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 flex items-center gap-1"
            >
              <svg
                className="h-5 mb-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>

              <div>878-874-6228</div>
            </a>
            <div>|</div>
            <a
              href="mailto:info@indkc.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 gap-1 flex items-center"
            >
              <svg
                className="h-5 mb-0.5"
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

              <div>info@indkc.com</div>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* faceBook */}
            <a
              href="https://www.facebook.com/officialikc"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/indiankarting_ikc/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href="https://www.youtube.com/c/SPAARKINDIA"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;