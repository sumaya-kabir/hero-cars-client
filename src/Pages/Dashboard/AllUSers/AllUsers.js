import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://hero-cars-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleAdminRole = (id) => {
        fetch(`https://hero-cars-server.vercel.app/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Admin role is given successfully');
                refetch();
            }
        })
    }

    return (
        <div>
            <h2>All Users</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <td>{i+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user?.role !== 'admin' &&
                                        <Button onClick={() => handleAdminRole(user._id)} className="btn-info">Make Admin</Button>
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

export default AllUsers;