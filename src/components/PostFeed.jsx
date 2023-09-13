import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { useQuery } from "react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PostFeed = () => {
  const fetchData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = response.json();
    return res;
  };
  const { data, isLoading, isError } = useQuery("getPosts", fetchData);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (!isLoading) {
    return (
      <div className="flex flex-col m-1  gap-2">
        <h1 className="text-center font-medium text-md md:text-xl text-[#00285F] m-4">
          LoremIpsum Posts
        </h1>
        <div className="flex flex-col m-1 gap-2">
          {isLoading ? (
            <div className="flex justify-center align-middle ">
              <AiOutlineLoading3Quarters className="loading-icon mt-5 transition duration-300 ease-in-out" />
            </div>
          ) : (
            data.map((item) => (
              <PostCard
                key={item.id}
                download_url={item.download_url}
                author={item.author}
              />
            ))
          )}
        </div>
      </div>
    );
  }
};

export default PostFeed;
