import Lottie from 'lottie-react';
import React from 'react';
import anim from '../../public/anim.json'
import { Link } from 'react-router';
import { motion } from 'framer-motion';


const EmptyBookDetails = () => {

    const style = {
        height: 300,
    };
    return (
        <>
            <section className="grid justify-center items-center mb-5">
                <div  className="grid justify-center items-center">
                    <div >
                        <Lottie animationData={anim} style={style} />
                    </div>
                    <motion.p
                        initial={{ scale: 0, x: 0 }} // start off-screen to the right
                        animate={{ scale: 1.1, x: 0 }} // end at its natural position
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2.5, // 2500ms delay between loops
                            ease: "easeInOut"
                        }}
                        className="mt-4 mb-8 text-center">Book details you are lokking <br />
                        is not added yet!</motion.p>
                    <Link className='btn' to='/addbook'>Add Now!</Link>
                </div>
            </section>
        </>
    );
};

export default EmptyBookDetails;