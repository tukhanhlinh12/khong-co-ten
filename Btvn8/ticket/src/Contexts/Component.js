import React, { useContext } from 'react';
import Ticket from './Ticket';
import './Component.css';

const Component = () => {
  const { remainingTickets } = useContext(Ticket);

  return (
    <>
      <div className="header">
        <h2></h2>
        <p>Where are you go to ?</p>
      </div>

      <div className="month">
        <p>September <span className="sale">Sold Out</span></p>
        <hr />
        <p>November <span className="sale">Sold Out</span></p>
        <hr />
        <p>December <span className="ticket">{remainingTickets}</span></p>
      </div>
    </>
  );
};

export default Component;
