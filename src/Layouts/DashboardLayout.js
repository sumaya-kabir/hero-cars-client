import React, { useContext } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import MenuBar from '../Pages/CommonPages/Navbar/Navbar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <MenuBar></MenuBar>
            <Breadcrumb className='bread'>
                <Breadcrumb.Item><Link to='/dashboard'>My Orders</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/dashboard/wishlist'>My Wishlists</Link></Breadcrumb.Item>


                {
                    isSeller &&
                    <>
                        <Breadcrumb.Item><Link to='/dashboard/addproducts'>Add Products</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/dashboard/myproducts'>My Products</Link></Breadcrumb.Item>
                    </>
                }


                {
                    isAdmin &&
                    <>
                        <Breadcrumb.Item><Link to='/dashboard/users'>All Users</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/dashboard/buyers'>All Buyers</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/dashboard/sellers'>All Sellers</Link></Breadcrumb.Item>
                    </>
                }


            </Breadcrumb>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;