import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Sellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = seller => {
        console.log(seller)
        fetch(`http://localhost:5000/sellers/${seller._id}`,{
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

    return (
        <div>
            <h2>All Sellers</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
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
                                <td><Button onClick={() => handleDelete(seller)} className="btn-danger">Delete</Button></td>
                                
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Sellers;