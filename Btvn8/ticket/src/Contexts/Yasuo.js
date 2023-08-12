import React, { useContext } from 'react';
import Modal from './Modal';
import MyContext from './MyContext';
import './Yasuo.css';

const Yasuo = () => {
  const eventsData = useContext(MyContext);

  return (
    <div className='home'>
      {eventsData.map(event => (
        <div className='noname' key={event.id}>
          <div className='nolife'>
            <h3>{event.location}</h3>
            <p className='colort'>{event.date}</p>
            <p>{event.description}</p>
            <br />
            <Modal />
            <br /><br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Yasuo;





