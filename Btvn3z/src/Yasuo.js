import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Yasuo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='home'>
                <div className='noname'>
                    <img src={require('./p1.jpg')} className='imager' alt='...' />
                    <div className='nolife'>
                        <h3>Ha Noi</h3>
                        <p className='colort'>Fri 28 Nov 2021</p>
                        <p>Ha Noi faith and hope. We always waiting for you!</p>
                        <br></br> <br></br> <br></br>
                        <button className='nolike' onClick={handleShow}>Buy Tickets</button>
                        <button className='nolikes' onClick={handleShow}>Get free</button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className='noname'>
                    <img src={require('./p2.jpg')} className='imager' alt='...' />
                    <div className='nolife'>
                        <h3>Ho Chi Minh City</h3>
                        <p className='colort'>Tue 28 Dec 2021</p>
                        <p>HCM City active and modernization. We always waiting for you!</p>
                        <br></br> <br></br>
                        <button className='nolike' onClick={handleShow}>Buy Tickets</button>
                        <button className='nolikes' onClick={handleShow}>Get free</button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className='noname'>
                    <img src={require('./p3.jpg')} className='imager' alt='...' />
                    <div className='nolife'>
                        <h3>Da Nang</h3>
                        <p className='colort'>Thu 28 Nov 2021</p>
                        <p>Da Nang has regional stature. We always waiting for you!</p>
                        <br></br> <br></br>
                        <button className='nolike' onClick={handleShow}>Buy Tickets</button>
                        <button className='nolikes' onClick={handleShow}>Get free</button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br />
                <br />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
