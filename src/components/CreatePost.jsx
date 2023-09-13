import React, { useState } from "react";

const CreatePost = () => {
  const [base64String, setBase64String] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const apiUrl = "http://localhost:3000/api/posts";
    if (title && body && base64String) {
      const requestData = {
        title: title,
        body: body,
        base64String: base64String,
      };
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Parse the JSON response
        })
        .then((data) => {
          console.log("Response data:", data); // Handle the response data
        })
        .catch((error) => {
          console.error("Fetch error:", error); // Handle any errors
        });
    } else {
      alert("please complete all fields");
    }
  };
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64 = e.target.result;
        setBase64String(base64);
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <div className="flex flex-col bg-slate-100 m-2 p-4 rounded-md shadow-md hover:shadow-xl transition duration-200 ease-in-out">
      <p className="text-center font-medium text-md md:text-xl text-[#00285F] m-2">
        Create Post
      </p>
      <label>Title</label>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>body</label>
      <textarea
        placeholder="Write Something"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></textarea>
      <label>Upload Image</label>
      <input
        type="file"
        id="fileInput"
        onChange={(e) => handleFileSelect(e)}
        accept=".jpg, .jpeg, .png"
      ></input>
      {base64String && (
        <div>
          <p>Selected Image:</p>
          <img src={base64String} alt="Selected" />
        </div>
      )}
      <button
        type="submit"
        onClick={() => handleSubmit()}
        className="bg-[#F78B00] p-1 rounded-md my-5 text-[#00285F]"
      >
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
