import React from 'react';
import { motion } from 'framer-motion';

import img from '/slider3.jpeg'

const Slider3 = () => {
    return (
        <>
            <div
                className="hero min-h-[calc(100vh-100px)] rounded-3xl overflow-hidden "
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="hero-overlay "></div>
                <div className='p-3.5 md:p-0'>
                    <div className="hero-content text-neutral-content text-center relative ">
                        <div >

                            <motion.h1
                                initial={{ opacity: 0, x: [1000, 0] }} // start off-screen to the right
                                animate={{ opacity: 1, x: 0 }} // end at its natural position
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 2.5, // 2500ms delay between loops
                                    ease: "easeInOut"
                                }}

                                className="mb-5 text-2xl font-semibold md:text-4xl md:font-bold pt-1.5 md:pt-4"> Read, Track, and Grow</motion.h1>
                            <motion.p
                                initial={{ opacity: 0, }} // start off-screen to the right
                                animate={{x: [-1000, 0],opacity:1 }} // end at its natural position
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 2.5, // 2500ms delay between loops
                                    ease: "easeInOut"
                                }}
                                className="mb-5 md:w-md mx-auto">
                                Keep track of what you’re reading, set goals, and build your personal reading journey. Your bookshelf grows with you.
                            </motion.p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider3;