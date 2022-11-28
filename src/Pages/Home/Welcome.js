import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import welcome from '../../assets/welcome.jpg'

const Welcome = () => {
    return (
        <div>
            <h2 className='text-center py-5'>WELCOME TO THE <span className='text-warning fw-bold'>HERO CARS</span></h2>
            <Container className='pb-5'>
                
                <Row className='text-muted fs-4'>
                    <Col sm={12} md={6}>
                    <img className='img-fluid' src={welcome} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                    <p>Cars aren’t just your vehicle, for many car-owners, their cars are their babies that need special attention and taking care of. That’s not a question of why because cars play big roles in our lives, it takes us from point A to point B, it fills our hearts with joy, and it takes us to journeys of a lifetime.
                        <br />
                        <br />
                        Cars are important parts of our lives. Where they used horses in the past, we now have crazy car engines that go from zero to a hundred in seconds. 
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;