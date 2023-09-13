import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const ContactCard = ({ username, email, phone }) => {
  return (
    <div className="flex flex-row gap-2 bg-white m-2 p-2 rounded-md flex-wrap shadow-md hover:scale-x-105 hover:shadow-xl transition duration-300 ease-in-out">
      <AiOutlineUser className="text-xl" />
      <div className="flex flex-col ">
        <p className="text-xs font-semibold ">{username}</p>
        <p className="text-xs flex-wrap">{email}</p>
        <p className="text-xs">{phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
