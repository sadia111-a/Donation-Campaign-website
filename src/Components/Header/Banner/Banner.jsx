import React from "react";

const Banner = () => {
  // const Banner = ({setPhones,phones}) => {

  //   const handleSearch = (e)=>{
  //     e.preventDefault()

  //     const searchValue = e.target.search.value
  //     console.log(searchValue);
  //     localStorage.setItem("search",searchValue)

  //     const filterData = phones?.filter(phone=> phone.brand_name === searchValue)
  //     setPhones(filterData)

  //     console.log(filterData);

  //   }
  // onSubmit={handleSearch}
  return (
    <div className="h-[80vh]  ">
      <h1 className=" absolute text-center bottom-[40%] w-full mt-24 text-5xl  text-[#0B0B0B] font-bold">
        I Grow By Helping People In Need
      </h1>
      <img
        className="h-full w-full opacity-10 relative"
        src="src/assets/How-to-Donate-on-Giving-Tuesday.webp"
        alt=""
      />

      <div className="searchbar absolute left-20 right-16 bottom-[25%] mx-auto w-[60%] ml-30  px-20">
        <form>
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
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
