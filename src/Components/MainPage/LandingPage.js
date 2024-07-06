import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import Content from "./Content";
const LandingPage = () => {
  return (
    <div className="relative z-0">
      <Header />

      <div className=" w-full h-fit">
        <div className="text-white flex flex-col items-center h-screen justify-center pt-5">
          <h1
            className="text-center text-[5rem] font-semibold tracking-wider w-fit rounded-lg px-10"
            style={{
              backgroundImage:
                "radial-gradient(500% 500% at 50% 0%, transparent 0%, gray 250%)",
            }}
          >
            Transform Your
          </h1>
          <h1
            className="text-center text-[5rem] w-fit -mt-2 font-semibold tracking-wider px-10 rounded-lg"
            style={{
              backgroundImage:
                "radial-gradient(400% 500% at 50% 0%, transparent 0%, gray 250%)",
            }}
          >
            Brand with Forge
          </h1>
          <p className="text-2xl text-gray-300 mt-5">
            Content Creation, Branding & Design, Public Relation
          </p>
          <p className="text-2xl text-gray-300">
            Marketing Automation All in one with Forge
          </p>
          <motion.div
            className="flex justify-center relative mt-10"
            whileTap={{
              scale: 0.9,
            }}
          >
            <motion.button className="text-sm shadow-2xl shadow-white rounded-full font-semibold text-white bg-emerald-600 px-5 py-2">
              <div className="flex items-center pl-2">
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
          <div className="flex justify-center gap-x-44 mt-10">
            <Content />
            <Content />
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
