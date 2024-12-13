import React from "react";
import Header from "@/core/layout/components/Header";
import Sidebar from "@/core/layout/components/SlideBar";
import NotificationList from "@/core/notifications/components/NotificationList";
import TicketList from "@/core/tickets/components/TicketList";

const DashboardPage = () => {
  const tickets = [
    { id: 1, title: "Ticket 1", priority: "HIGH", status: "OPEN", progress: 50 },
    { id: 2, title: "Ticket 2", priority: "MEDIUM", status: "IN_PROGRESS", progress: 75 },
  ];

  const notifications = [
    { id: 1, content: "Notification 1", createdAt: "2024-12-13", read: false },
    { id: 2, content: "Notification 2", createdAt: "2024-12-14", read: true },
  ];

  const handleNotificationClick = (id: number) => {
    alert(`Notification ${id} clicked`);
  };

  const handleViewTicket = (id: number) => {
    alert(`View details for ticket ${id}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <section className="mt-4">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <NotificationList notifications={notifications} onClick={handleNotificationClick} />
          </section>
          <section className="mt-4">
            <h2 className="text-xl font-semibold">Tickets</h2>
            <TicketList tickets={tickets} onViewDetails={handleViewTicket} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
