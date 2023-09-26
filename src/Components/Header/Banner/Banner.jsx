import { useEffect, useState } from "react";
import "../../../Style/Style.css";
import PropTypes from "prop-types";
const Banner = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(src/assets/donation_n.jpg)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:max-w-md lg:max-w-5xl ">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl  text-[#0B0B0B] font-bold">
            I Grow By Helping People In Need
          </h1>

          <div className=" mx-auto w-full lg:w-[80%] ml-30  px-20">
            <form onSubmit={handleSearch}>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  name="search"
                  id="default-search"
                  className="block w-full p-4 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search here......."
                  required
                />
                <button
                  type="button"
                  className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
// Banner.propTypes = {
//   donations: PropTypes.array.isRequired,
//   setDonation: PropTypes.func.isRequired,
// };
export default Banner;
