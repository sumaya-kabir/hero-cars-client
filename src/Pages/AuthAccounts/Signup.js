import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const { createUser, googleSignup } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        googleSignup()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully');
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;

        setSignupError('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully');
                navigate('/');
            })
            .catch(err => {
                console.error(err.message)
                setSignupError(err.message)
            })

    }

    return (
        <div className='w-25 mx-auto bg-warning p-5 my-5 rounded'>
            <h4>SignUp</h4>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="fullName" type="text" placeholder="Full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{signupError}</p>
                <Button className="w-100" variant="danger" type="submit">
                    SignUp
                </Button>
            </Form>
            <p className='text-center'>Already have an account? <Link className='text-decoration-none' to='/login'>SignIn</Link></p>
            <h6 className='text-center'>OR</h6>
            <Button className='w-100' onClick={handleGoogleSignin} variant="primary" type="submit">
                SignUp with Google
            </Button>
        </div>
    );
};

export default Signup;