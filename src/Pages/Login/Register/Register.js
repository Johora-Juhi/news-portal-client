import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        setError('');

        createUser(email, password)
            .then(result => {
                handleUpdateUser(name,photoURL);
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }

    const handleUpdateUser=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        updateUser(profile);

    }
    const handleClicked = event => {
        setClicked(event.target.checked);
    }
    return (
        <Form className='bg-light p-5 rounded' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Provide PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleClicked} type="checkbox" label={<> Accept <Link to='/terms'>Terms and Condition</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!clicked}>
                Register
            </Button>
            <Form.Group className='mt-2'>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>
        </Form>
    );
};

export default Register;