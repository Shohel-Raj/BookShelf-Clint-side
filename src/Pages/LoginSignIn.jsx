import React, { useEffect } from 'react';
import Login from '../Component/LoginSignIn/Login';
import SignIn from '../Component/LoginSignIn/SignIn';

const LoginSignIn = () => {
    useEffect(()=>{
             document.title = `${import.meta.env.VITE_site_name} | Login`
        },[])
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginSignIn;