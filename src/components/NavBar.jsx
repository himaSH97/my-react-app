// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { AiOutlineNotification, AiOutlineUser } from "react-icons/ai";

const NavBar = ({ name }) => {
  return (
    <div className="h-10 bg-yellow-400 flex flex-row justify-around align-middle">
      <div className="flex flex-row gap-1 md:gap-2 align-middle justify-center items-center">
        <FiMessageSquare className="text-xs  md:text-lg cursor-pointer hover:text-white " />
        <FiSettings className="text-xs md:text-lg cursor-pointer hover:text-white" />
        <AiOutlineNotification className="text-xs  md:text-lg cursor-pointer hover:text-white" />
      </div>
      <div className="w-28 min-h-16 items-center">
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex flex-row gap-1 md:gap-2 align-middle justify-center items-center">
        <p className="text-xs md:text-base"> {name}</p>
        <AiOutlineUser className="text-sm md:text-lg cursor-pointer hover:text-white" />{" "}
      </div>
    </div>
  );
};

export default NavBar;
