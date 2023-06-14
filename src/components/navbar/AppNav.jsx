import React, { useEffect, useState } from "react";
import logo from "../../assets/images/LogoBlack.png";
import { useNavigate, useLocation } from "react-router-dom";

export const AppNavbar = ({ onClick }) => {
  const [currenturl, setCurrentUrl] = useState("");
  const Navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    setCurrentUrl(pathname);
    console.log("navbar");
    console.log(pathname); // or do something else with the link
  });

  return (
    <div className="flex justify-center bg-[#DFE7FF] px-5 md:px-0">
      <div className="  max-w-[1280px] w-full flex items-center justify-between mx-auto h-[95px]">
        <div className="flex justify-between w-full p">
          <div>
          <a href="/">
            <img src={logo} className="w-48" />
            </a>
          </div>
          <div className="w-6/12 flex justify-end ">
            {/* <button
            type="button"
            className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-gray-900 mr-3"
          >
            Our App
          </button> */}
            {currenturl !== "/" ? (
              <button
                onClick={onClick}
                type="button"
                className="rounded-3xl bg-primary_blue px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Us
              </button>
            ) : (
              <button
                onClick={() => {
                  Navigate("/provider");
                }}
                type="button"
                className="rounded-3xl bg-primary_blue px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register as a Professional
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
