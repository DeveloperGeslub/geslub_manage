import React, { FC } from "react";
import Badge from "../badge/Badge";
import Button from "../button/Button";
import ScrollArea from "../scrollArea/ScrollArea";


interface Notification {
  id: number;
  content: string;
  createdAt: string;
  read: boolean;
}

interface NotificationDrawerProps {
  notifications: Notification[];
  onMarkAllRead: () => void;
  onNotificationClick: (notification: Notification) => void;
}

const NotificationDrawer: FC<NotificationDrawerProps> = ({
  notifications,
  onMarkAllRead,
  onNotificationClick,
}) => {
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Notificaciones</h3>
        <Button variant="outline" size="sm" className="mt-2" onClick={onMarkAllRead}>
          Marcar todas como leídas
        </Button>
      </div>
      <ScrollArea className="p-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 mb-2 bg-gray-100 rounded-lg shadow cursor-pointer"
            onClick={() => onNotificationClick(notification)}
          >
            <p className="text-sm text-gray-800">{notification.content}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.createdAt}</p>
            {!notification.read && (
              <Badge variant="default" className="mt-2">
                No leído
              </Badge>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default NotificationDrawer;
