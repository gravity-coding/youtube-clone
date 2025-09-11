import React from "react";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className="w-screen h-[8vh] bg-white dark:bg-black flex items-center">
        <div className="flex space-x-4 h-full px-5 items-center">
          <IoIosMenu className="dark:text-white text-3xl" />
          <div className="flex space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt="Youtube_Logo"
              className="w-9"
            />
            <span className="dark:text-white font-normal text-xl relative" style={{
                fontFamily:"Roboto Condensed"
            }}>
              YouTube
              <sup className="text-sm absolute text-gray-300 font-sans" style={{
                fontFamily:"Roboto Condensed"
            }}>IN</sup>
            </span>
          </div>
        </div>
        <div className="bg-amber-400">heloo</div>
        <div className="bg-green-300">gagagag</div>
      </nav>
    </>
  );
}

export default Navbar;
