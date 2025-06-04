import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../assets/SharedComponent/Navbar';

const RootLayout = () => {
    return (
        <>
            <div className='bg-base-100 shadow-sm'>
                <Navbar></Navbar>
            </div>
            <div>

                <Outlet></Outlet>
            </div>

            <ToastContainer />





        </>

    );
};

export default RootLayout;