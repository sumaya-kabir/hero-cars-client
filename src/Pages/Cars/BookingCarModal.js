import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const BookingCarModal = ({ booking }) => {
    const { product, resalePrice, seller
    } = booking;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

    }
    return (
        <>
            <Button className='w-100 fw-bold text-light' variant="warning" onClick={handleShow}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking For {product}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <Form.Control type="text" defaultValue={product} readOnly />
                        <br />
                        <Form.Control type="text" defaultValue={resalePrice} readOnly />
                        <br />
                        <Form.Control type="text" readOnly />
                        <br />
                        <Form.Control type="text" readOnly />
                        <br />
                        <Form.Control type="text" placeholder='Phone Number' />
                        <br />
                        <Form.Control type="text" placeholder='Meeting Location' />
                        <br />
                        <Button className='w-100 fw-bold' variant="warning" type="submit">
                            Submit
                        </Button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default BookingCarModal;