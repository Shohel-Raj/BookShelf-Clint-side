import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
// import Loader from '../Loader/LOader';
import { AuthContext } from '../../Contexts/AuthContext';
import Loader from '../Loader/Loader';

// import { useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location= useLocation()

    // const navigate =useNavigate()
    const { user,loading } = use(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/loginSignInPage'></Navigate>
    }
    // console.log(user);

    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRoute;