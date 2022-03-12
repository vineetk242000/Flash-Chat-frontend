import React from "react";
import ReactEmoji from "react-emoji";

function Message({ text, user, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="flex justify-end mt-2 items-center">
      <p className="mr-2 text-gray-500">{trimmedName}</p>
      <div className="bg-blue-500 rounded-full  px-4 py-2">
        <p className="text-white">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start mt-2 items-center">
      <div className="bg-gray-300 rounded-full  px-4 py-2">
        <p className="">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="ml-2 text-gray-500">{user}</p>
    </div>
  );
}

export default Message;
