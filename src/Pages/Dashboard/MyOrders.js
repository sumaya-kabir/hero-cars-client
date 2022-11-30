import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://hero-cars-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2>My orders</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) =>
                            <tr key={booking._id}>
                                <td>{i+1}</td>
                                <td className='w-25'><img className='w-25 rounded' src={booking.picture} alt="" /></td>
                                <td>{booking.item}</td>
                                <td>{booking.price}</td>
                                <td>
                                {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                    <button className='btn btn-sm btn-danger'>Pay</button></Link>
                                }
                                {
                                    booking.price && booking.paid && <button className='btn btn-success btn-sm'>Paid</button>
                                }
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;