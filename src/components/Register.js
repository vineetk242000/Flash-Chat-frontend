import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <div className="flex flex-col w-5/6 h-max px-4 py-2 items-center rounded bg-white shadow-lg sm:w-1/4 ">
        <h1 className="text-2xl my-4 text-blue-500 font-medium">Flash Chat</h1>
        <input
          type="text"
          placeholder="name"
          autoCapitalize="true"
          spellCheck="false"
          className="my-2 rounded py-2 px-4 focus:outline-blue-500 w-full outline-slate-100 outline-2 outline"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="room"
          autoCapitalize="true"
          spellCheck="false"
          className="my-2 rounded py-2 px-4 focus:outline-blue-500 w-full outline-slate-100 outline-2 outline"
          onChange={(event) => setRoom(event.target.value)}
          style={{ marginTop: "10px" }}
        ></input>
        <input
          type="text"
          placeholder="age"
          autoCapitalize="true"
          spellCheck="false"
          className="my-2 rounded py-2 px-4 focus:outline-blue-500 w-full outline-slate-100 outline-2 outline"
        ></input>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
          className="my-4 bg-blue-500 hover:bg-blue-700 rounded py-1 px-4 text-white w-full flex justify-center"
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default Register;
