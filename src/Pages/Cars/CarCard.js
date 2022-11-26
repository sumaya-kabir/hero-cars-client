import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CarCard = ({ car }) => {
    const {picture, product} = car;
    return (
        <Card className='m-4 p-0 text-center' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button
                className='w-100'
                variant="warning">Buy Now</Button>
            </Card.Body>
        </Card>
    );
};

export default CarCard;