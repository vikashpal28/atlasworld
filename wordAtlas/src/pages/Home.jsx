import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { About } from "./About";

export const Home = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row justify-center items-center bg-black gap-5 text-white h-[500px] pt-5 px-4">
        {/* Text Section */}
        <div className="flex flex-col gap-3 p-2 w-full md:w-1/2 max-w-md">
          <p className="text-2xl md:text-3xl font-semibold leading-snug">
            Explore the World, One Country at a Time.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="/country">
            <button className="bg-gray-700 w-full sm:w-[180px] p-2 rounded-xl border border-white flex justify-center items-center gap-2 hover:bg-gray-600 transition text-sm md:text-base">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 max-w-md p-2 flex justify-center">
          <img
            src="/images/world.avif"
            alt="world"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>

      <About />
    </>
  );
};
