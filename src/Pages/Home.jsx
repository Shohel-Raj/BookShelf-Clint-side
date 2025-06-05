import React from 'react';
import Slider from '../Component/Slider/Slider';
import PopularBookCard from '../Component/PopularBook/PopularBookCard';

const Home = () => {

    return (
        <div>

            <Slider></Slider>

            <div className='bg-[#f4f7f9]'>
                <div className=' w-11/12 md:w-10/12 mx-auto py-6'>
                    <div className='text-center my-3.5'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Discover the most-loved reads by our community.</h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>From chart-topping fiction to must-read nonfiction, explore a diverse range of books that readers across the globe can't stop talking about. Whether it's a gripping mystery, a heartwarming romance, an inspiring biography, or a groundbreaking piece of journalism, these titles continue to spark curiosity, conversation, and a genuine love for reading.</p>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center'>
                        <PopularBookCard></PopularBookCard>
                        <PopularBookCard></PopularBookCard>
                        <PopularBookCard></PopularBookCard>
                        <PopularBookCard></PopularBookCard>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;