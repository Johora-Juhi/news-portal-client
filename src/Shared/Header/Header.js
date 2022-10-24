import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css';
import Image from 'react-bootstrap/Image';
import { FaUserAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';


const Header = () => {
    const {user,logOut}  = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error('error',error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><span className='bg-primary text-light tw-semibold px-2 py-1 rounded'>News</span> Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'}><Nav.Link href="#features"> Home </Nav.Link></Link>
                        <Nav.Link href="#pricing">News</Nav.Link>
                        <NavDropdown className='bg d-lg-none' style={{ backgroundColor: '#f8f9fa', border: 'none' }} title="Categories" id="collasible-nav-dropdown">
                            <LeftSideNav></LeftSideNav>
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                            <>
                            <Button className='my-2' onClick={handleLogOut} variant="primary">Log out</Button>
                               {/* <Nav.Link href="#deets">{user?.displayName}</Nav.Link> */}
                            <Nav.Link>
                            {
                                user?.photoURL ?
                                <Image className='mt-2'
                                style={{height:'25px'}}
                                roundedCircle
                                src={user?.photoURL}></Image>
                                :
                                <FaUserAlt className='mt-2' />
                            }
                        </Nav.Link>
                            </>
                            :
                            <>
                            <Link className='text-light' to='/login'><Button className='me-2 my-2' variant="primary">Log in</Button></Link>
                            <Link className='text-light' to='/register'><Button className='my-2' variant="primary">Register</Button></Link>
                            </>
                        }                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;