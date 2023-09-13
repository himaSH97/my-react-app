import React, { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const MyPostCard = (props) => {
  const [likes, setLikes] = useState(props.metadata.likes);
  const [dislikes, setDislikes] = useState(props.metadata.likes);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/delete/${id}`, {
        method: "POST",
      });

      if (response.status === 200) {
      } else if (response.status === 404) {
        console.log("Record not found.");
      } else {
        console.error("Error deleting record.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col bg-white m-1 p-2 shadow-xl rounded-md">
      <img src={props.imageData} />
      <p className="font-semibold text-lg text-[#00285F]">{props.title}</p>
      {props.body}
      <div className="flex flex-row gap-2 justify-between align-middle items-center mt-3">
        <button
          onClick={() => handleDelete(props.id)}
          className="bg-red-700 rounded-md p-1 text-white text-sm"
        >
          Delete
        </button>
        <div className="flex flex-row gap-2">
          <AiFillLike
            onClick={() => setLikes((prevLikes) => prevLikes + 1)}
            className="text-[#00285F]"
          />
          <p>{likes}</p>
          <AiFillDislike
            onClick={() => setDislikes((prevDislikes) => prevDislikes + 1)}
            className="text-[#00285F]"
          />
          {dislikes}
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
