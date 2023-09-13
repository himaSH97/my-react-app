import React, { useState, useEffect } from "react";
import MyPostCard from "./MyPostCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MyPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const apiUrl = "http://localhost:3000/api/getPosts";

    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response body as JSON
        return response.json();
      })
      .then((data) => {
        // Handle the JSON data
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div className="mt-6">
      <p className="text-center font-medium text-md md:text-xl text-[#00285F] m-6">
        My Posts
      </p>
      <div>
        {isLoading ? (
          <div className="flex justify-center align-middle ">
            <AiOutlineLoading3Quarters className="loading-icon mt-5 transition duration-300 ease-in-out" />
          </div>
        ) : (
          posts.map((item) => (
            <MyPostCard
              key={item._id}
              id={item.id}
              title={item.title}
              body={item.body}
              imageData={item.imageData}
              metadata={item.metadata}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyPosts;
