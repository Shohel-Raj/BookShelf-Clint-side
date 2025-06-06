import React from 'react';
import Sponsor from './Sponsor';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';


const SponsorSec = () => {
    return (
        <>
            <div className=' text-center space-y-2.5 py-7'>

                <div className='text-center my-3.5'>
                    <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Our Sponsors Are </h1>
                    <p className='md:w-3/4 mx-auto mb-3 small'>Proudly partnered with forward-thinking sponsors who champion the joy of reading and lifelong learning, supporting our mission to connect readers, spark imagination, and grow a dynamic literary community through shared passion and purpose.</p>

                </div>
            </div>
            <div>
                <Suspense fallback={<Loader></Loader>}>
                    <Sponsor></Sponsor>
                </Suspense>

            </div>

        </>
    );
};

export default SponsorSec;