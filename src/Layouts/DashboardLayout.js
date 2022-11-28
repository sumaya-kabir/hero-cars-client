import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useSeller from '../hooks/useSeller';
import MenuBar from '../Pages/CommonPages/Navbar/Navbar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const [isSeller] = useSeller();
    console.log(isSeller)
    return (
        <div>
            <MenuBar></MenuBar>
            <Breadcrumb className='bread'>
                <Breadcrumb.Item><Link to='/dashboard'>My Orders</Link></Breadcrumb.Item>
                {
                    !isSeller &&
                    <>
                    <Breadcrumb.Item><Link to='/dashboard/addproducts'>Add Products</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to='/dashboard/myproducts'>My Products</Link></Breadcrumb.Item>
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