import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

const Head = () => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  return (
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
        />
        <HiOutlineSearch className="w-auto h-10 p-2.5 bg-gray-200 rounded-r-full" />
      </div>

      <div className="grid-rows-2 flex items-center">
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Head;
