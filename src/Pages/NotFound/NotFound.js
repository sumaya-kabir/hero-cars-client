import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../assets/404-error.webp'

const NotFound = () => {
    return (
        <div className='pt-5 mt-5 text-center'>
            <img className='img-fluid' src={notfound} alt="" />
            <br />
            <Link to='/'>
            <Button className='btn btn-warning text-light fw-bold'>Go Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;