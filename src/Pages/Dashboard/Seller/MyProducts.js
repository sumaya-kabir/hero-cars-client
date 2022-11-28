import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myproducts = [], refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = (advertise) => {
        console.log(advertise);
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    toast.success('The Product is Advertised successfully');
                } else {
                    toast.error(data.message)
                }
            })
    }

    const handleDelete = product => {
        fetch(`http://localhost:5000/myproducts/${product._id}`,{
            method: 'DELETE',
            // headers: {
                
            //     // authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                toast.success(`Product is deleted`);
                refetch()
            }
            
        })
    }

    return (
        <div>
            <h2>My Products</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Advertisement</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myproducts.map((product, i) =>
                            <tr key={product._id}>
                                <td>{i+1}</td>
                                <td className='w-25'><img className='w-25 rounded' src={product.picture} alt="" /></td>
                                <td>{product.product}</td>
                                <td>{product.resalePrice}</td>
                                <td className='text-success'>Available</td>
                                <td><button onClick={() => handleAdvertise(product)} className='btn btn-info btn-sm'>Advertise</button></td>
                                <td><button onClick={() => handleDelete(product)} className='border-0 text-danger fw-bold'>X</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyProducts;