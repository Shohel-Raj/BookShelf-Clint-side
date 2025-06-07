import Lottie from 'lottie-react';
import React from 'react';
import anim from '../../public/anim.json'
import { Link } from 'react-router';

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
                    <h1 className='text-center mb-3 uppercase font-bold italic'>No Book Added Yet</h1>
                    <Link className='btn' to='/addbook'>Add Now!</Link>
                </div>
            </section>
        </>
    );
};

export default EmptyMyBook;