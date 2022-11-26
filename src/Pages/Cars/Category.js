import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
const categories = useLoaderData();

    
    return (
        <div>
            Category{categories[0].category}
            <div className='row'>
                {
                    categories.map(category => 
                    <Card
                    key={category._id}
                    className='m-4 p-0 text-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={category.picture} />
                    <Card.Body>
                        <Card.Title>{category.product}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button
                        className='w-100'
                        variant="warning">Buy Now</Button>
                    </Card.Body>
                </Card>)
                }
            </div>
        </div>
    );
};

export default Category;