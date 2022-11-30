import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BookingCarModal from './BookingCarModal';
import { HiBadgeCheck } from "react-icons/hi";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const Category = () => {
    const {user} = useContext(AuthContext);
const categories = useLoaderData();

const handleWishList= (wish) => {
    const wishList = {
        category: wish.category,
        product: wish.product,
        picture: wish.picture,
        seller: wish.seller,
        sellerEmail: wish.email,
        years: wish.years,
        condition: wish.condition,
        phone: wish.phone,
        location: wish.location,
        orginalPrice: wish.orginalPrice,
        resalePrice: wish.resalePrice,
        description: wish.description,
        isVerified: wish.isVerified,
        email: user?.email
    }

    fetch('https://hero-cars-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(wishList)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    
                    toast.success('The item is added to your wishlist');
                } else {
                    toast.error(data.message)
                }
            })

}
    
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
                            <p className='text-success'><del className='text-danger'>{category.orginalPrice}</del> ${category.resalePrice}</p>
                            <p>Years Of Use: {category.years} years</p>
                            <p>Seller: {category.seller}
                            {
                                !category.isVerified &&
                                <></>
                            }

                            { 
                                category.isVerified &&
                                <HiBadgeCheck className='text-primary'></HiBadgeCheck>
                            }
                            </p>
                            <Button className='w-100 mb-3' variant="outline-warning"
                            onClick={() => handleWishList(category)}
                            >Add To Wishlist</Button>
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