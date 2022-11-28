import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Buyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://hero-cars-server.vercel.app/buyers`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = buyer => {
        console.log(buyer)
        fetch(`https://hero-cars-server.vercel.app/buyers/${buyer._id}`,{
            method: 'DELETE',
            // headers: {
                
            //     // authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                toast.success(`Buyer is removed`);
                refetch()
            }
            
        })
    }

    return (
        <div>
            <h2>All Buyers</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Buyer Name</th>
                        <th>Buyer Email</th>
                        <th>Delete Buyer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, i) =>
                            <tr key={buyer._id}>
                                <td>{i+1}</td>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><Button onClick={() => handleDelete(buyer)} className="btn-danger">Delete</Button></td>
                                
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Buyers;