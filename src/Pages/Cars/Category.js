import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BookingCarModal from './BookingCarModal';

const Category = () => {
const categories = useLoaderData();

    
    return (
        <div className='p-5'>
            <h2>Category: <span className='text-warning fw-bold'>{categories[0].category}</span></h2>
            <div className='row'>
                {
                    categories.map(category => 
                    <Card
                    key={category._id}
                    className='m-4 p-0 text-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={category.picture} />
                    <Card.Body>
                        <Card.Title>{category.product}</Card.Title>
                        <>
                            <p>Orginal Price: <del>{category.orginalPrice}</del> </p>
                            <p>Resale Price: ${category.resalePrice}</p>
                            <p>Years Of Use: {category.years} years</p>
                            <p>Seller: {category.seller}</p>
                        </>
                        <BookingCarModal
                        booking={category}
                        ></BookingCarModal>
                    </Card.Body>
                </Card>)
                }
            </div>
        </div>
    );
};

export default Category;