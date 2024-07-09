import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import Content from "./Content";
const LandingPage = () => {
  const customStyles = {
    transform: "translateY(-350px) rotate(-85deg)",
    width: "560px",
    height: "1380px",
    background:
      "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(158, 64%, 39%, .2) 0, hsla(158, 64%, 39%, .07) 50%, hsla(158, 64%, 39%, 0) 80%)",
    position: "absolute",
    top: "0",
    left: "0",
  };
  
  const customStylesRight = {
    transform: "translateX(-410px) translateY(-350px) rotate(90deg)",
    width: "560px",
    height: "1380px",
    background:
      "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(158, 64%, 39%, .2) 0, hsla(158, 64%, 39%, .07) 50%, hsla(158, 64%, 39%, 0) 80%)",
    position: "absolute",
    top: "0",
    right: "0",
  };

  return (
    <div className="relative z-0">
      <Header />

      <div className=" w-full h-fit">
        <div style={customStyles}></div>
        <div className="-mr-13" style={customStylesRight}></div>

        <div className="text-white flex flex-col items-center h-screen justify-center pt-5">
          <h1
            className="text-center text-[5rem] font-semibold tracking-wider w-fit rounded-lg px-10 text-gradient-left-to-right "
            // style={{
            //   backgroundImage:
            //     "radial-gradient(500% 500% at 50% 0%, transparent 0%, gray 250%)",
            // }}
          >
            Transform Your
          </h1>
          <h1
            className="text-center text-[5rem] w-fit -mt-2 font-semibold tracking-wider px-10 rounded-lg text-gradient-right-to-left"
            // style={{
            //   backgroundImage:
            //     "radial-gradient(400% 500% at 50% 0%, transparent 0%, gray 250%)",
            // }}
          >
            Brand with Forge
          </h1>
          <p className="text-2xl text-gray-300 mt-5 z-10">
            Content Creation, Branding & Design, Public Relation
          </p>
          <p className="text-2xl text-gray-300 z-10">
            Marketing Automation All in one with Forge
          </p>
          <motion.div
            className="flex justify-center relative mt-10"
            whileTap={{
              scale: 0.9,
            }}
          >
            <motion.button
              className="text-sm  rounded-full font-semibold text-white bg-emerald-600 px-5 py-2"
              style={{ boxShadow: "1px 10px 50px rgba(107, 114, 128, 0.9)" }}
            >
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
          <div className="z-10 flex justify-center gap-x-44 mt-10">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
