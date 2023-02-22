import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Debouncing with 200ms using setTimeout

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("json data isss", json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col shadow-lg">
        <div className="col-span-1 flex items-center px-4 gap-4">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => handleSidebarToggle()}
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            className="w-28"
          />
        </div>

        <div className="col-span-9 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 w-1/2 p-1.5 rounded-l-full indent-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <HiOutlineSearch className="w-auto h-10 p-2.5 bg-gray-100 rounded-r-full border border-gray-400" />
          {searchQuery && (
            <div className="fixed top-14 left-[34rem] w-[34.5rem] shadow-lg rounded-lg border border-gray-100 bg-white py-2 px-2">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="grid-rows-2 flex items-center">
          <FaUserAlt />
        </div>
      </div>
    </>
  );
};

export default Head;
