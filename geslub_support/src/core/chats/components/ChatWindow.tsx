import React, { FC } from "react";

interface ChatMessage {
  id: number;
  sender: "user" | "bot";
  content: string;
}

interface ChatWindowProps {
  messages: ChatMessage[];
}

const ChatWindow: FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow h-80 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-2 p-2 rounded ${
            message.sender === "user" ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
