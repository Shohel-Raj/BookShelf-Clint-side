import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../assets/SharedComponent/Navbar';
import { AnimatePresence } from 'motion/react';

const RootLayout = () => {
    const location = useLocation();
    return (
        <>
            <div className='bg-base-100 shadow-sm w-full z-30 sticky top-0'>
                <Navbar></Navbar>
            </div>
            <AnimatePresence mode='wait'>

                <div key={location.pathname}>

                    <Outlet></Outlet>
                </div>

            </AnimatePresence>


            <ToastContainer />





        </>

    );
};

export default RootLayout;