
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from '../Pages/CommonPages/AppFooter/AppFooter';
import ResponsiveAppBar from '../Pages/CommonPages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
           <ResponsiveAppBar></ResponsiveAppBar>
           <Outlet></Outlet>
           <AppFooter></AppFooter>
        </div>
    );
};

export default Main;