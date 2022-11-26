import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const BuyerLogin = () => {
    const {googleSignup} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignin = () => {
        googleSignup()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='w-50 mx-auto my-5 p-5 text-center border border-2 border-warning'>
            <h4>Buyer Login</h4>
            <Button className='m-4 w-50 btn btn-warning' onClick={handleGoogleSignin} variant="primary" type="submit">
                SignIn with Google
            </Button>
        </div>
    );
};

export default BuyerLogin;