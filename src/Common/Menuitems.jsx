import {
  faAngleDown,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { mainContext } from "../Context";
import { Link } from "react-router-dom";

function Menuitems() {
  let { changemenu, menu, setMenu, mydata } = useContext(mainContext);

  useEffect(() => {
    setMenu(menu);
  }, [menu, setMenu]);

  return (
    <div className="w-full">
      {mydata.map((v, i) => {
        return (
          <div key={i} className="mb-2 w-full px-1 md:px-2 relative group">
            <div
              onClick={() => setMenu(v.id === menu ? 0 : v.id)}
              className={`flex items-center transition-all duration-300 py-3 px-4 cursor-pointer hover:bg-[#4B49AC] hover:text-white ${v.id === menu
                  ? "rounded-t-xl bg-[#4B49AC] text-white shadow-lg"
                  : "text-gray-600 rounded-xl"
                } ${changemenu === true ? "md:justify-center md:px-0" : "justify-between"}`}
            >
              <h4 className={`flex items-center text-sm font-medium ${changemenu === true ? "md:flex-col" : "flex-row"}`}>
                <span className={`text-lg opacity-80 transition-all ${changemenu === true ? "md:mr-0 md:mb-1" : "mr-3"}`}>
                  {v.icon}
                </span>
                <span className={`truncate transition-all ${changemenu === true ? "md:hidden lg:hidden" : "block"}`}>
                  {v.uid}
                </span>
              </h4>

              <FontAwesomeIcon
                icon={v.id === menu ? faAngleDown : faAngleRight}
                className={`text-xs transition-transform duration-300 ${v.id === menu ? "rotate-0" : ""
                  } ${changemenu === true ? "md:hidden" : "block"}`}
              />
            </div>

            {/* Submenu for Expanded (Mobile + Desktop) */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${v.id === menu && (changemenu === false || (changemenu === true && window.innerWidth < 768))
                  ? "max-h-64 opacity-100 py-3 bg-[#4B49AC] rounded-b-xl shadow-inner"
                  : "max-h-0 opacity-0"
                } ${changemenu === true ? "md:hidden" : "block"}`}
            >
              <ul className="text-white text-xs px-10">
                <Link to={v.link1}>
                  <li className="flex items-center mb-3 hover:translate-x-1 transition-transform cursor-pointer">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[6px] mr-3"
                    />
                    {v.sub1}
                  </li>
                </Link>
                {v.sub2 !== "" && (
                  <Link to={v.link2}>
                    <li className="flex items-center hover:translate-x-1 transition-transform cursor-pointer">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-[6px] mr-3"
                      />
                      {v.sub2}
                    </li>
                  </Link>
                )}
              </ul>
            </div>

            {/* Hover Submenu for Collapsed Desktop */}
            {changemenu === true && (
              <div className="absolute left-full top-0 ml-1 hidden md:group-hover:block z-[9999]">
                <div className="bg-[#4B49AC] text-white w-48 rounded-r-xl shadow-2xl p-4 animate-in fade-in slide-in-from-left-2 duration-300">
                  <h4 className="text-xs font-bold border-b border-white/20 pb-2 mb-3 uppercase tracking-wider">
                    {v.uid}
                  </h4>
                  <ul className="text-xs space-y-3">
                    <Link to={v.link1}>
                      <li className="flex items-center hover:translate-x-1 transition-transform">
                        <FontAwesomeIcon icon={faCircle} className="text-[6px] mr-3" />
                        {v.sub1}
                      </li>
                    </Link>
                    {v.sub2 !== "" && (
                      <Link to={v.link2}>
                        <li className="flex items-center hover:translate-x-1 transition-transform">
                          <FontAwesomeIcon icon={faCircle} className="text-[6px] mr-3" />
                          {v.sub2}
                        </li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Menuitems;
