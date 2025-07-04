import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoPlayBackSharp } from "react-icons/io5";




import { Link } from 'react-router';

import anim from '../../public/anim.json'

const Error = () => {
    const style = {
        height: 300,
    };

    useEffect(()=>{
         document.title = `${import.meta.env.VITE_site_name} | Error`
    },[])

    return (


        
        <>

            <section
                data-aos="zoom-out-right"
                data-aos-duration="1000"
                className="flex items-center h-full ">
                <div className="flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center ">
                    <div>
                        <Lottie animationData={anim} style={style} />
                    </div>
                    <p className="text-2xl font-semibold md:text-3xl">Oops! Something went <motion.span
                        animate={{
                            color: ['#f21a1a', '#df0e0e', '#f27878', '#b40e0e'],
                            transition: { duration: 2, repeat: Infinity }
                        }}
                    >wrong.</motion.span></p>
                    <motion.p
                        initial={{ scale: 0, x: 0 }} // start off-screen to the right
                        animate={{ scale: 1.1, x: 0 }} // end at its natural position
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2.5, // 2500ms delay between loops
                            ease: "easeInOut"
                        }}
                        className="mt-4 mb-8 ">We couldn’t load your the page at the moment. <br />
                        Please try again later or return to the homepage.</motion.p>

                    <Link to='/' className="px-8 py-3 font-extrabold rounded playfair  btn bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black mt-4 uppercase  "><IoPlayBackSharp size={20}/> Back to homepage</Link>
                </div>
            </section>
        </>
    );
};

export default Error;