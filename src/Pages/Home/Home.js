import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import CarCategory from './CarCategory';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <CarCategory></CarCategory>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;