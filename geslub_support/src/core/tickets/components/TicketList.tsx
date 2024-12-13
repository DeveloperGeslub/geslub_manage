import Badge from '@/ui/badge/Badge';
import Button from '@/ui/button/Button';
import Progress from '@/ui/progress/Progress';
import ScrollArea from '@/ui/scrollArea/ScrollArea';

import React, { FC } from 'react';


interface Ticket {
  id: number;
  title: string;
  priority: string;
  progress: number;
  status: string;
  assignedTo?: { id: number; name: string };
}

interface TicketListProps {
  tickets: Ticket[];
  onViewDetails: (ticket: Ticket) => void;
}

const TicketList: FC<TicketListProps> = ({ tickets, onViewDetails }) => {
  return (
    <ScrollArea className="h-[400px]">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="mb-4 p-4 bg-card rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-foreground">
              #{ticket.id} - {ticket.title}
            </h3>
            <Badge
              variant={
                ticket.priority === 'HIGH'
                  ? "destructive"
                  : ticket.priority === 'MEDIUM'
                  ? "default"
                  : "secondary"
              }
            >
              {ticket.priority}
            </Badge>
          </div>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso:</span>
              <span>{ticket.progress}%</span>
            </div>
            <Progress value={ticket.progress} className="w-full" />
          </div>
          {ticket.assignedTo && (
            <p className="text-sm text-muted-foreground mt-2">Asignado a: {ticket.assignedTo.name}</p>
          )}
          <Button variant="outline" size="sm" className="mt-4" onClick={() => onViewDetails(ticket)}>
            Ver detalles
          </Button>
        </div>
      ))}
    </ScrollArea>
  );
};

export default TicketList;
