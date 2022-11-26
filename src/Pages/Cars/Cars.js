import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from './CarCard';

const Cars = () => {
    const cars = useLoaderData();
    return (
        <div>
            <h2 className='text-center py-5'>Our Huge Car Collections</h2>
            <div className='row'>
                {
                    cars.map(car => <CarCard
                    key={car._id}
                    car={car}
                    ></CarCard>)
                }
            </div>
        </div>
    );
};

export default Cars;