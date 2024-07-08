import React, { useEffect, useState } from "react";
import logo from "../Images/Forge_logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos || currentScrollPos < 50) &&
          currentScrollPos < 50
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="fixed  border-red-500 top-0 w-full flex justify-center z-10 items-center py-5  shadow-md">
      <div
        className={`${
          !visible
            ? "bg-gray-900 opacity-100 border transition-opacity ease-in-out duration-1000"
            : ""
        } flex  justify-center gap-x-[30rem] text-white py-3 px-5 rounded-full`}
      >
        <motion.div
          className={`flex justify-center py-1 gap-x-16 items-center`}
          initial={{
            x: 0,
          }}
          animate={{
            x: !visible ? 100 : 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <img alt="logo" className="w-14 mb-1 cursor-pointer" src={logo} />
          <ul className="font-semibold flex w-fit gap-x-8 items-center mt-1">
            <li className="">
              <h2 className="cursor-pointer border-hidden  py-1 px-2 rounded-md hover:bg-gray-500 hover:bg-opacity-30 hover:border border-gray-600">
                Home
              </h2>
            </li>
            <li className="">
              <h2 className="cursor-pointer border-hidden   py-1 px-2 rounded-md hover:bg-gray-500 hover:bg-opacity-30 hover:border border-gray-600">
                Service
              </h2>
            </li>
            <li className="">
              <h2 className="cursor-pointer border-hidden   py-1 px-2 rounded-md hover:bg-gray-500 hover:bg-opacity-30 hover:border border-gray-600">
                About
              </h2>
            </li>
            <li className="">
              <h2 className="cursor-pointer border-hidden   py-1 px-2 rounded-md hover:bg-gray-500 hover:bg-opacity-30 hover:border border-gray-600">
                Package
              </h2>
            </li>
            <li className="">
              <h2 className="cursor-pointer border-hidden   py-1 px-2 rounded-md hover:bg-gray-500 hover:bg-opacity-30 hover:border border-gray-600">
                Contact
              </h2>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="flex justify-center relative"
          initial={{
            x: 0,
          }}
          animate={{
            x: !visible ? -100 : 0,
          }}
          transition={{
            duration: 0.8,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <motion.button
            className="text-sm rounded-full font-semibold text-white bg-emerald-600 px-3 "
            style={{ boxShadow: "1px 10px 50px rgba(107, 114, 128, 0.9)" }}
          >
            <div className="flex items-center pl-2 text-xs">
              Book a call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-1 border-red-500"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                ></path>
              </svg>
            </div>
          </motion.button>
          <div className="absolute h-[2px] w-20 -bottom-[0.9px] bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
