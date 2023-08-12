import React, { createContext, useState } from 'react';

const Ticket = createContext();

export const TicketProvider = ({ children }) => {
  const [remainingTickets, setRemainingTickets] = useState(15); 

  const decreaseTickets = (amount) => {
    setRemainingTickets((prevTickets) =>
      prevTickets >= amount ? prevTickets - amount : prevTickets
    );
  };

  return (
    <Ticket.Provider value={{ remainingTickets, decreaseTickets }}>
      {children}
    </Ticket.Provider>
  );
};

export default Ticket;
