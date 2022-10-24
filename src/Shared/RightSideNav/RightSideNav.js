import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaWhatsapp, FaTwitter, FaTwitch, FaAlignJustify } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BrandCarosel from '../Brandcarousel/BrandCarosel';

const RightSideNav = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleSignIn = () => {

        googleLogin()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.error('error',error))

    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle /> Log In With Google</Button>
                <Button className='mb-3' variant="outline-dark"><FaGithub /> Log In With Github</Button>
            </ButtonGroup>
            <div className='mb-3'>
                <h4>Follow Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaAlignJustify /> Terms and Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarosel></BrandCarosel>

        </div>
    );
};

export default RightSideNav;
