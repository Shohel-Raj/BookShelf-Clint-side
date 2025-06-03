import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <ToastContainer />





        </>

    );
};

export default RootLayout;