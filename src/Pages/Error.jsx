import Lottie from 'lottie-react';
import React from 'react';

import { Link } from 'react-router';

import anim from '../../public/anim.json'

const Error = () => {
    const style = {
        height: 300,
    };

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
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="px-8 py-3 font-extrabold rounded playfair  btn bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black mt-4 uppercase  ">Back to homepage</Link>
                </div>
            </section>
        </>
    );
};

export default Error;