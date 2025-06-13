import Lottie from 'lottie-react';
import React from 'react';
import anim from '../../public/login.json'
import { Link } from 'react-router';
import { FaRightLong } from 'react-icons/fa6';

const EmptyBookShelf = () => {

    const style = {
        height: 300,
    };
    return (
        <>
            <section className="grid justify-center items-center col-span-4 mb-5">
                <div data-aos="zoom-out-up" data-aos-duration="1000" className="grid justify-center items-center">
                    <div >
                        <Lottie animationData={anim} style={style} />
                    </div>
                    <h1 className='text-center mb-3 uppercase font-bold italic'>You are not loggin yet!</h1>
                    <h1 className='text-center mb-3 uppercase font-bold italic'>Login first for getting data</h1>
                    <Link className='btn uppercase bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black' to='/loginSignInPage'>Login <FaRightLong />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default EmptyBookShelf;