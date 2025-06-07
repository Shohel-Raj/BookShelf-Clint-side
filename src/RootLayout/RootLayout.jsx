import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { AnimatePresence } from 'motion/react';
import Navbar from '../Component/SharedComponent/Navbar';
import Footer from '../Component/SharedComponent/Footer/Footer';
import Lower from '../Component/SharedComponent/Footer/Lower';


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
            <div className='bg-[#f4f7f9]'>
                <Footer></Footer>
                <Lower></Lower>
            </div>


            <ToastContainer />





        </>

    );
};

export default RootLayout;