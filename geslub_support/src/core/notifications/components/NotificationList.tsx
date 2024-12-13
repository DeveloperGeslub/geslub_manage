import React, { FC } from "react";
import NotificationItem from "./NotificationItem";


interface Notification {
  id: number;
  content: string;
  createdAt: string;
  read: boolean;
}

interface NotificationListProps {
  notifications: Notification[];
  onClick: (id: number) => void;
}

const NotificationList: FC<NotificationListProps> = ({ notifications, onClick }) => {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          {...notification}
          onClick={() => onClick(notification.id)}
        />
      ))}
    </div>
  );
};

export default NotificationList;
