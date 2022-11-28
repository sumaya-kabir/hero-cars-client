import React from 'react';
import { Card } from 'react-bootstrap';

const AdvertiseCard = ({advertise}) => {
    return (
        <div>
            <Card className='bg-warning animate__animated animate__backInUp animate__delay-2s' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={advertise.picture} />
                        <Card.Body>
                            <Card.Title className='text-dark'>{advertise.product}</Card.Title>
                            <>
                               <p className='fw-bold text-success'>${advertise.resalePrice}</p> 
                            </>
                            <button className='btn btn-danger'>Book This Exclusive Car</button>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default AdvertiseCard;