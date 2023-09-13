import React from "react";

const PostCard = (props) => {
  return (
    <div className="relative hover:scale-105 transition duration-200 ease-in-out">
      <img src={props.download_url} className="w-full h-auto rounded-md " />
      <p className="absolute bottom-0 left-0 bg-black text-white p-2 w-full opacity-75 text-xs rounded-md">
        {" "}
        Post by {props.author}
      </p>
    </div>
  );
};

export default PostCard;
