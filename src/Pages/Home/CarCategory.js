import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarCategory = () =>{

    return (
        <div className='bg-dark text-light text-center p-5'>
            <p className='fs-1 p-5'>Find From The Best Cars</p>
            <Container>
                <Row>
                    <Col>
                    <Link className='text-decoration-none' to={`/category/Convertible`}>
                        <div className='border border-2 border-warning m-2 p-5 text-center text-warning'>

                            <h5>CONVERTIBLE</h5>
                        </div>
                    </Link>
                    </Col>
                    <Col>
                    <Link className='text-decoration-none' to={`/category/Sedan`}>
                    <div className='border border-2 border-warning m-2 p-5 text-center text-warning'>

                        <h5>SEDAN</h5>
                    </div>
                    </Link>
                    </Col>
                    <Col>
                    <Link className='text-decoration-none' to={`/category/Coupe`}>
                    <div className='border border-2 border-warning m-2 p-5 text-center text-warning'>

                        <h5>COUPE</h5>
                    </div>
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CarCategory;