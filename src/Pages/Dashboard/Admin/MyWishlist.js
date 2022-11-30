import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { HiBadgeCheck } from "react-icons/hi";
import { Link } from 'react-router-dom';

const MyWishlist = () => {
    const { user } = useContext(AuthContext);
    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(`https://hero-cars-server.vercel.app/wishlist?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='m-5'>
            <h2>My Wishlist</h2>
            
            <div className='row'> 
            {
                wishlist.map(wish => 
                    <Card
                    key={wish._id}
                    className='m-4 p-0 text-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={wish.picture} />
                    <Card.Body>
                        <Card.Title>{wish.product}</Card.Title>
                        <>
                            <p className='text-success'><del className='text-danger'>{wish.orginalPrice}</del> ${wish.resalePrice}</p>
                            <p>Years Of Use: {wish.years} years</p>
                            <p>Seller: {wish.seller}
                            {
                                !wish.isVerified &&
                                <></>
                            }

                            { 
                                wish.isVerified &&
                                <HiBadgeCheck className='text-primary'></HiBadgeCheck>
                            }
                            </p>
                        </>
                        <Link to={`/dashboard/payment/${wish._id}`}>
                        <Button variant="warning">Buy Now</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
                    )
            }
                    
            </div>
        </div>
    );
};

export default MyWishlist;