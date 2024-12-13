import React, { FC, useState } from "react";

interface TicketFormProps {
  onSubmit: (title: string, description: string) => void;
}

const TicketForm: FC<TicketFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onSubmit(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">New Ticket</h3>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Create Ticket
      </button>
    </form>
  );
};

export default TicketForm;
