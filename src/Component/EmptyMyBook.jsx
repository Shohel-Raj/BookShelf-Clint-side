import Lottie from 'lottie-react';
import React from 'react';
import anim from '../../public/anim.json'
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const EmptyMyBook = () => {

    const style = {
        height: 300,
    };
    return (
        <>
            <section className="grid justify-center items-center mb-5">
                <div data-aos="zoom-out-up" data-aos-duration="1000" className="grid justify-center items-center">
                    <div >
                        <Lottie animationData={anim} style={style} />
                    </div>
                    <motion.h1
                        initial={{ scale: 0, x: 0 }} // start off-screen to the right
                        animate={{ scale: 1.1, x: 0 }} // end at its natural position
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2.5, // 2500ms delay between loops
                            ease: "easeInOut"
                        }}
                        className='text-center mb-3 uppercase font-bold italic'>No Book Added Yet</motion.h1>
                    <Link className='btn' to='/addbook'>Add Now!</Link>
                </div>
            </section>
        </>
    );
};

export default EmptyMyBook;