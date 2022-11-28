import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';


const BookingCarModal = ({ booking }) => {
    const { product, resalePrice, category, picture} = booking;
    const {user} = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const customer = form.customer.value;
        const item = form.item.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;
        const price = form.price.value;

        const booking = {
            category: category,
            item,
            customer,
            email,
            phone,
            meeting,
            price,
            picture

        }
        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast
        fetch('https://hero-cars-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    setShow(false);
                    toast.success('The item is booked');
                } else {
                    toast.error(data.message)
                }
            })



    }
    return (
        <>
            <Button className='w-100 fw-bold text-light' variant="warning" onClick={handleShow}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking From the Category: <span className='text-warning'>{category}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleBooking}>
                        <Form.Control type="text"
                        name="item"
                        defaultValue={product} readOnly />
                        <br />
                        <Form.Control type="text" 
                        name="price"
                        defaultValue={resalePrice} readOnly />
                        <br />
                        <Form.Control type="text"
                        name="customer"
                        defaultValue={user?.displayName} readOnly />
                        <br />
                        <Form.Control type="text"
                        name="email"
                        defaultValue={user?.email} readOnly />
                        <br />
                        <Form.Control type="text"
                        name="phone"
                        placeholder='Phone Number' />
                        <br />
                        <Form.Control type="text"
                        name="meeting"
                        placeholder='Meeting Location' />
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