import React from "react";
import { CiMenuKebab, CiSearch } from "react-icons/ci";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className="w-screen h-[8vh] bg-white dark:bg-black flex items-center justify-between">
        {/* Left nav */}
        <div className="flex space-x-4 h-full px-5 items-center">
          <IoIosMenu className="dark:text-white text-3xl cursor-pointer" />
          <div className="flex space-x-1 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt="Youtube_Logo"
              className="w-9 h-6 cursor-pointer"
            />
            <span
              className="dark:text-white font-normal text-xl relative cursor-pointer"
              style={{
                fontFamily: "Roboto Condensed",
              }}
            >
              YouTube
              <sup
                className="text-[10px] top-[25%] -right-[15%] absolute dark:text-neutral-400 text-neutral-800"
                style={{
                  fontFamily: "Roboto Condensed",
                }}
              >
                IN
              </sup>
            </span>
          </div>
        </div>

        {/* center nav */}
        <div className="w-[40%] h-full flex items-center space-x-4">
          <div className="flex w-full items-center">
            <input
              type="search"
              placeholder="Search"
              className="w-full h-10 dark:border-2 dark:border-neutral-800 border border-neutral-300 rounded-bl-full rounded-tl-full dark:placeholder:text-neutral-500 ps-4 dark:text-white focus:outline-blue-600"
            />
            <div className="dark:bg-neutral-800 border border-l-0 bg-neutral-100 dark:border-0 border-neutral-300 cursor-pointer h-10 px-5 rounded-br-full rounded-tr-full flex justify-center items-center">
              <CiSearch className="dark:text-white text-2xl" />
            </div>
          </div>

          <div className="dark:bg-neutral-800 bg-neutral-200 cursor-pointer h-10 w-11 flex justify-center items-center rounded-full ">
            <FaMicrophone className="dark:text-white"/>
          </div>
        </div>


        {/* Right Nav */}
        <div className="flex justify-center items-center space-x-3 pr-4">
          <CiMenuKebab className="dark:text-white text-xl cursor-pointer"/>
          <div className="flex justify-center items-center space-x-1.5 border-2 dark:border-neutral-800 border-blue-100 cursor-pointer dark:hover:bg-neutral-800 hover:bg-blue-100 p-1.5 px-2.5 rounded-full">
            <FaRegUserCircle className="dark:text-white text-blue-700 text-xl"/>
            <span className="dark:text-white text-blue-700 text-sm">Sign Up</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
