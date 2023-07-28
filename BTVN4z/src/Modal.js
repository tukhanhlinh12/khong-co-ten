import React, { useState } from 'react';

const Modal = ({ ticketType, onClose }) => {
    const [numTickets, setNumTickets] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'numTickets') {
            setNumTickets(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    };

    const handleSubmit = () => {
        console.log(`Đã đăng ký "${numTickets}" vé, tin nhắn sẽ được gửi tới "${email}"`);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className='ticket'>{ticketType}</h2>
                <form>
                    <div className='form-live'>
                        <label className='dola' htmlFor="numTickets">Tickets $3 per one</label> <br />
                        <input className="form-group" type="number" name="numTickets" value={numTickets} onChange={handleChange} placeholder='Enter number your want' /> <br />
                        <label className='dola' htmlFor="email">Send to</label> <br />
                        <input className="form-group" type="email" name="email" value={email} onChange={handleChange} placeholder='Enter your email' />
                    </div>
                    <span className='form-lives'>
                        <button className='payz' type="button" onClick={handleSubmit}>Pay</button> <br /> <br />
                        <button className='closez' type="button" onClick={handleClose}>Close</button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Modal;
