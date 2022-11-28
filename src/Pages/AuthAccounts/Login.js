import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signin = () => {
    const { signIn, googleSignup } = useContext(AuthContext);
    const [signinError, setSigninError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignin = () => {
        googleSignup()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }

    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const seller = form.seller.value;

        console.log(seller);

        setSigninError('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message)
                setSigninError(err.message)
            })

    }

    return (
        <div className='w-25 mx-auto bg-warning p-5 my-5 rounded'>
            <h4>Login</h4>
            <Form onSubmit={handleSignin}>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Seller"
                            name="seller"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Buyer"
                            name="buyer"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        
                    </div>
                ))}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{signinError}</p>
                <Button className="w-100" variant="danger" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center'>New to Hero Cars? <Link className='text-decoration-none' to='/signup'>SignUp</Link></p>
            <h6 className='text-center'>OR</h6>
            <Button className='w-100' onClick={handleGoogleSignin} variant="primary" type="submit">
                SignIn with Google
            </Button>

        </div>
    );
};

export default Signin;