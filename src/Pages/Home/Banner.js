import React from 'react';
import banner from '../../assets/banner2.jpg';
import yellow from '../../assets/yellow-car.png'

const Banner = () => {
    return (
        <div className='text-center text-light p-5' style=
            {{ 
                backgroundImage:`linear-gradient(to bottom, rgba(145, 146, 152, 0.52), rgba(100, 12, 53, 0.73)),url(${banner})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',backgroundSize: 'cover',
            }}
            >
            <h2 className='animate__animated animate__backInLeft animate__delay-1s fs-1 fw-semibold pt-5'>Welcome to Biggest and Stunning <br /> <span className='text-warning fw-bold '>Car Deals</span></h2>
            <img className='d-none d-md-block d-lg-block animate__animated animate__backInRight animate__delay-1s' style={{width: '50%', marginTop: '-150px', marginLeft: '300px'}} src={yellow} alt="" />
        </div>
    );
};

export default Banner;