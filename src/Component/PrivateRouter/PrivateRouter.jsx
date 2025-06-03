import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
// import Loader from '../Loader/LOader';
import { AuthContext } from '../../Contexts/AuthContext';

// import { useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location= useLocation()

    // const navigate =useNavigate()
    const { user,loading } = use(AuthContext)
    if(loading){
        return <h1>loading................</h1>
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