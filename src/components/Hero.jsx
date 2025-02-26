import React from "react";
import Navbar from "./Navbar";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ height: "100dvh", position: "relative" }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0%",
          left: "0%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Navbar />

        <div
          className=" p-10 m-6 w-7xl "
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(-0%,-50%)",
          }}
        >
          <p className="text-gray-50 text-8xl capitalize font-medium leading-25">
            Freedom of the press is not just important to democracy, it is
            democracy.
          </p>
          <div className="bg-gray-50 rounded-full w-md my-5 flex p-1 ">
            <input
              type="text"
              className="p-3 w-auto text-gray-800 flex-2 border-none outline-none text-xl font-medium"
              placeholder="search"
            />
            <button className="bg-gray-800 text-gray-50 px-5 py-1 rounded-full flex-1 cursor-pointer text-xl flex justify-between items-center">
              Search
              <div className="bg-gray-50 rounded-full flex justify-center items-center aspect-1/1 p-2 ">
                <FaArrowRightLong className="text-gray-800 " />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
