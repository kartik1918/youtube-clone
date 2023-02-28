import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import logo from "../assets/imgs/vimo_logo.png"
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  /**
   * searchCache = {
   *  "iphone": ["iphone 11", "iphone 14"]
   * }
   *
   * searchQuery: iphone
   *
   */

  useEffect(() => {
    // Debouncing with 200ms using setTimeout

    const timer = setTimeout(() => {
      // checking if searchQuery exists in cache
      console.log(searchCache)
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

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

    // cache the results
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col shadow-lg relative">
        <div className="col-span-1 flex items-center px-4 gap-4">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => handleSidebarToggle()}
          />
          <img
            src={logo}
            className="w-20 h-20"
          />
        </div>

        <div className="col-span-9 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 w-1/2 p-1.5 rounded-l-full indent-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <HiOutlineSearch className="w-auto h-10 p-2.5 bg-gray-100 rounded-r-full border border-gray-400" />
          {searchQuery && showSuggestions && (
            <div className="absolute top-14 left-[34rem] w-[34.5rem] shadow-lg rounded-lg border border-gray-100 bg-white py-2 px-2">
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
