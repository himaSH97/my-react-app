import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setContacts(result);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <p className="text-center font-medium text-md md:text-xl text-[#00285F] m-4">
        Contacts
      </p>
      <div>
        {isLoading ? (
          <div className="flex justify-center align-middle ">
            <AiOutlineLoading3Quarters className="loading-icon mt-5 transition duration-300 ease-in-out" />
          </div>
        ) : (
          contacts.map((item) => (
            <ContactCard
              key={item.id}
              username={item.username}
              email={item.email}
              phone={item.phone}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Contact;
