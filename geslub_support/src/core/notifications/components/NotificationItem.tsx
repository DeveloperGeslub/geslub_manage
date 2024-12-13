import React, { FC } from "react";

interface NotificationItemProps {
  id: number;
  content: string;
  createdAt: string;
  read: boolean;
  onClick: () => void;
}

const NotificationItem: FC<NotificationItemProps> = ({ content, createdAt, read, onClick }) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg shadow mb-2 cursor-pointer ${
        read ? "opacity-50" : "opacity-100"
      }`}
      onClick={onClick}
    >
      <p>{content}</p>
      <p className="text-sm text-gray-500">{createdAt}</p>
    </div>
  );
};

export default NotificationItem;
