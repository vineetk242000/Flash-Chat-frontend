import React, { useEffect, useState } from "react";
import Input from "./Input";
import Users from "./User";
import Messages from "./Messages";
import io from "socket.io-client";
import queryString from "query-string";

let socket;
function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState();
  const [users, setUsers] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://vk-flash-chat.herokuapp.com/";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room });
    return socket.emit("disconnect"), socket.off();
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  async function sendMessage(event) {
    event.preventDefault();
    if (message) {
      await socket.emit("sendMessage", message, () => setMessage(""));
    }
    await setMessage("");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#F2F5FF]">
      <div className="flex flex-row w-2/3  bg-white rounded-lg shadow-sm h-2/3">
        <div className="w-1/3 p-4 bg-neutral-900 rounded-l-lg overflow-y-scroll">
          <Users users={users} />
        </div>
        <div className="w-2/3 p-4">
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
