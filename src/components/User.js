import React from "react";
import ScrolltoBottom from "react-scroll-to-bottom";

function Users({ users }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ScrolltoBottom>
      <h1 className="font-medium text-lg text-center text-white">
        Available Users
      </h1>
      {users ? (
        <div className="my-4 ">
          {users.map(({ name, i }) => (
            <div className="m-2 flex flex-row w-full items-center" key={i}>
              <div className="relative inline-block">
                <div
                  className="flex justify-center items-center object-cover w-12 h-12 rounded-full bg-white font-bold text-xl"
                  alt="Profile image"
                >
                  {name.slice(0, 1)}
                </div>
                <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
              </div>
              <p className="ml-4 text-white">{capitalizeFirstLetter(name)}</p>
            </div>
          ))}
        </div>
      ) : null}
    </ScrolltoBottom>
  );
}

export default Users;
