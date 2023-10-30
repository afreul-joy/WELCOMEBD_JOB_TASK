import "./Search.css";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="mx-auto searchBG dark:bg-slate-800  bg-white py-3 px-3 shadow-md rounded-full my-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Type your dream destination"
          className="searchField relative p-3 border border-gray-300 text-black bg-white dark:bg-gray-700 dark:text-white rounded-full"
        />
        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-rose-700 hover:bg-rose-800 text-white py-2 px-6 rounded-full">
          <AiOutlineSearch className="text-black dark:text-white" size="2em" />
        </button>
        <div
          className="dark:bg-slate-900  absolute mt-2 bg-white shadow-md md:w-14 lg:w-[360px] z-10" // Add z-index here
        ></div>
      </div>
    </div>
  );
};

export default Search;
