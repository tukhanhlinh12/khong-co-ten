import React, { useState, useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Ticket from './Ticket';
import './Modal.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { remainingTickets, decreaseTickets } = useContext(Ticket);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePay = () => {
    const ticketsToBuy = parseInt(username, 10);

    if (isNaN(ticketsToBuy)) {
      alert('Nhap so luong ve');
      return;
    }

    if (ticketsToBuy <= 0) {
      alert('Nhap so ve lon hon hoac bang 0');
      return;
    }

    if (ticketsToBuy > remainingTickets) {
      alert('So luong ve khong du');
      return;
    }

    setIsLoading(true); 
    setTimeout(() => {
      decreaseTickets(ticketsToBuy);
      setIsLoading(false); 
      closeModal();
    }, 1500); 

  };

  return (
    <>
      <button className='nolike' onClick={openModal}>Buy Tickets</button>
      <button className='nolikes' onClick={openModal}>Get free</button>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Ticket</h2>
            <input
              type='text'  
              placeholder='Enter number your want'
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type='email'
              placeholder='Enter your email'
              value={email} 
              onChange={handleEmailChange}
            />
            <button className='pay-button' onClick={handlePay} disabled={isLoading}>
              {isLoading ? (
                <FaSpinner className="spinner" />
              ) : (
                'Pay'
              )}
            </button>
            <button className='close-button' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;











