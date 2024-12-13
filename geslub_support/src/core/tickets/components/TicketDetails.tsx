import React, { FC } from "react";

interface TicketDetailsProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: string;
  onClose: () => void;
}

const TicketDetails: FC<TicketDetailsProps> = ({
  id,
  title,
  description,
  createdAt,
  status,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold">{`#${id} - ${title}`}</h3>
      <p className="mt-2">Description: {description}</p>
      <p>Created At: {createdAt}</p>
      <p>Status: {status}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default TicketDetails;
