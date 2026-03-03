import React, { useContext } from "react";
import Menuitems from "./Menuitems";
import "flowbite";
import { mainContext } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const { changemenu, setchangeMenu } = useContext(mainContext);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`duration-300 sticky top-0 left-0 h-screen bg-white border-r border-gray-100 shadow-sm z-40 transition-all hidden md:block
          ${changemenu === true ? "w-16 md:w-20" : "w-48 md:w-64"}
        `}
      >
        <ul
          className={`py-4 space-y-1 md:space-y-2 ${changemenu === true ? "px-1 md:px-2" : "px-3 md:px-4"}`}
        >
          <Menuitems />
        </ul>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1050] transition-opacity duration-300 md:hidden ${
          changemenu === true
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setchangeMenu(false)}
      ></div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-[1100] h-full bg-white w-4/5 sm:w-64 shadow-2xl transition-transform duration-300 md:hidden ${
          changemenu === true ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3 sm:p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
          <span className="font-bold text-[#4B49AC] text-lg sm:text-xl">
            Menu
          </span>
          <button
            onClick={() => setchangeMenu(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-red-500 active:bg-gray-200"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg sm:text-xl" />
          </button>
        </div>
        <div className="py-3 sm:py-4 px-2 sm:px-4 space-y-1 sm:space-y-2 overflow-y-auto h-[calc(100%-60px)] sm:h-[calc(100%-70px)]">
          <Menuitems />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
