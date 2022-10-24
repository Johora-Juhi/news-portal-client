import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location= useLocation();
    
    if(loading){
        <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate state={{from: location}} replace to='/login'></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoutes;