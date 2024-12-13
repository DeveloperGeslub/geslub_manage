import React, { FC } from "react";

interface TicketItemProps {
  id: number;
  title: string;
  priority: "HIGH" | "MEDIUM" | "LOW"; 
  status: string;
  progress: number;
  onViewDetails: (id: number) => void;
}

const TicketItem: FC<TicketItemProps> = ({ id, title, priority, status, progress, onViewDetails }) => {
  const priorityColors: Record<"HIGH" | "MEDIUM" | "LOW", string> = {
    HIGH: "text-red-500",
    MEDIUM: "text-yellow-500",
    LOW: "text-green-500",
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4">
      <h3 className="text-lg font-semibold">{`#${id} - ${title}`}</h3>
      <p className={`mt-1 ${priorityColors[priority]}`}>Priority: {priority}</p>
      <p>Status: {status}</p>
      <div className="relative mt-2 w-full h-2 bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button
        className="mt-3 text-blue-600 hover:underline"
        onClick={() => onViewDetails(id)}
      >
        View Details
      </button>
    </div>
  );
};

export default TicketItem;
