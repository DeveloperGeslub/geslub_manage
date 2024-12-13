import React, { FC } from 'react';
import { MicIcon, TicketIcon, HistoryIcon, CheckCircleIcon, BellIcon, UserIcon, LogOutIcon } from 'lucide-react';
import Badge from '@/ui/badge/Badge';
import Button from '@/ui/button/Button';
import Avatar from '@/ui/avatar/Avatar';
import AvatarFallback from '@/ui/avatar/AvatarFallback';
import AvatarImage from '@/ui/avatar/AvatarImage';

interface SidebarProps {
  user: { id: number; name: string; email: string; role: string };
  activeTab: string;
  setActiveTab: (tab: string) => void;
  newNotificationsCount: number;
  handleLogout: () => void;
}

const Sidebar: FC<SidebarProps> = ({ user, activeTab, setActiveTab, newNotificationsCount, handleLogout }) => {
  return (
    <div className="hidden md:flex w-64 flex-col bg-card border-r">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-xl font-semibold text-foreground">Ticket System</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("chat")}>
            <MicIcon className="mr-2 h-4 w-4" />
            Chat de Voz
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("tickets")}>
            <TicketIcon className="mr-2 h-4 w-4" />
            Tickets
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("history")}>
            <HistoryIcon className="mr-2 h-4 w-4" />
            Histórico
          </Button>
          {user.role === "TECHNICIAN" && (
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("resolved")}>
              <CheckCircleIcon className="mr-2 h-4 w-4" />
              Resueltos
            </Button>
          )}
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("notifications")}>
            <BellIcon className="mr-2 h-4 w-4" />
            Notificaciones
            {newNotificationsCount > 0 && (
              <Badge variant="destructive" className="ml-auto">{newNotificationsCount}</Badge>
            )}
          </Button>
        </nav>
      </div>
      <div className="flex items-center p-4 border-t">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback><UserIcon className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium text-foreground">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout}>
          <LogOutIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
