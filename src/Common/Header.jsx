import React, { useContext, useEffect } from "react";
import logo from "../img/logo (1).svg";
import minlogo from "../img/logo-mini.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { mainContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from '../slice/AdminSlice';

function Header() {
  let { changemenu, setchangeMenu } = useContext(mainContext);

  let loginData = useSelector((myAllState) => {
    return myAllState.loginStore.adminDetails;
  });

  let navigate = useNavigate();
  useEffect(() => {
    if (loginData == null) {
      navigate("/login");
    }
  }, [loginData]);

  let dispatch = useDispatch();

  return (
    <>
      <header className=" ">
        <nav className="bg-white border-gray-200  py-2.5  shadow-lg relative z-[999]">
          <div className="flex  justify-between items-center mx-auto ">
            <div
              className={` duration-[0.5s] mx-5  ${
                changemenu == true ? "w-[3%] " : "w-[16%]"
              }`}
            >
              <Link to="/dashboard" className="flex items-center">
                {changemenu === true ? (
                  <img
                    src={minlogo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Mini Logo"
                  />
                ) : (
                  <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                )}
              </Link>
            </div>

            <div
              className={`flex items-center lg:order-2 w-[84%] duration-[0.5s] ${
                changemenu === true ? "w-[97%]" : "w-[84%]"
              }  justify-between`}
            >
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setchangeMenu(!changemenu)}
              />
              <div>
                <a
                  href="#"
                  className="text-gray-800   focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  onClick={() => { dispatch(logOut()); navigate('/login'); }}
                >
                  Log Out
                </a>
                <a
                  href="#"
                  className=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  My Profile
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
