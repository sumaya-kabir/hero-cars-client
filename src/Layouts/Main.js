
import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../Pages/CommonPages/Navbar';

const Main = () => {
    return (
        <div>
           <ResponsiveAppBar></ResponsiveAppBar>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;