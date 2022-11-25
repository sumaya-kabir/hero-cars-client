import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import CarCategory from './CarCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CarCategory></CarCategory>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;