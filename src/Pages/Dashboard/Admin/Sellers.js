import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';


const Sellers = () => {
    const [buttonText, setButtonText] = useState('Unverified');

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://hero-cars-server.vercel.app/sellers`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = seller => {
        console.log(seller)
        fetch(`https://hero-cars-server.vercel.app/sellers/${seller._id}`,{
            method: 'DELETE',
            // headers: {
                
            //     // authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                toast.success(`seller is removed`);
                refetch()
            }
            
        })
    }

    const handleVerification = (email) => {
        
        fetch(`https://hero-cars-server.vercel.app/sellers/verify/${email}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Seller is verified');
                setButtonText('Verified');
                refetch();
            }
        })
    }

    return (
        <div>
            <h2>All Sellers</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Verification</th>
                        <th>Delete Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) =>
                            <tr key={seller._id}>
                                <td>{i+1}</td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                {
                                    
                                    <Button onClick={()=>handleVerification(seller.email)} variant="outline-danger" >{buttonText}</Button>
                                }
                                
                                </td>
                                <td><Button onClick={() => handleDelete(seller)}
                                className="btn btn-danger btn-sm ms-4">X</Button></td>
                                
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Sellers;