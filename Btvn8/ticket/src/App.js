import React from 'react';
import './index.css';
import MyContext from './Contexts/MyContext';
import Component from './Contexts/Component';
import Yasuo from './Contexts/Yasuo';
import { TicketProvider } from './Contexts/Ticket'; 

const App = () => {
  const eventsData = [
    {
      id: 1,
      location: 'Ha Noi',
      date: 'Fri 28 Nov 2021',
      description: 'Ha Noi faith and hope. We always waiting for you!'
    },
    {
      id: 2,
      location: 'Ho Chi Minh City',
      date: 'Tue 28 Dec 2021',
      description: 'HCM City active and modernization. We always waiting for you!'
    },
    {
      id: 3,
      location: 'Da Nang',
      date: 'Thu 28 Nov 2021',
      description: 'Da Nang has regional stature. We always waiting for you!'
    }
  ];
  
  return (
    <TicketProvider>
      <div>
        <MyContext.Provider>
          <Component />
        </MyContext.Provider>
      </div>
      <div>
        <MyContext.Provider value={eventsData}>
          <Yasuo />
        </MyContext.Provider>
      </div>
    </TicketProvider>
  );
};

export default App;
