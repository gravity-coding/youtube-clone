import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function MainOutlet() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainOutlet;
