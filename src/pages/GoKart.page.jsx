import { assests } from "../assests";

function GoKartPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-black via-gray-950 to-gray-950 py-24 flex items-center font-body min-h-dvh">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 flex-grow">
          <div className="grid grid-cols-1 md:items-center  md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col lg:py-5">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                Season 4
              </h2>

              <div className="">
                <p className="text-base font-semibold  mt-6 text-primary">
                  Indian Superkarting Series
                </p>
                <p className="text-neutral font-header">2018</p>

                <div className=" mt-8">
                  <ul className=" text-neutral md:text-sm text-xs font-body list-disc uppercase ml-4 font-semibold">
                    <li className="mb-3">Digital Marketer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl size-fit p-10">
              <img
                className="size-full aspect-auto"
                src={assests.global.hfkcLogo}
                alt="null"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GoKartPage;
