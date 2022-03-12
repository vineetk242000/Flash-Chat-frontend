import React from "react";
import ScrollBottom from "react-scroll-to-bottom";
import Message from "./Message";

function Messages({ messages, name }) {
  return (
    <ScrollBottom className="overflow-x-hidden overflow-y-auto h-[90%]">
      {messages.map((message, i) => (
        <div key={i}>
          <Message text={message.text} user={message.user} name={name} />
        </div>
      ))}
    </ScrollBottom>
  );
}

export default Messages;
