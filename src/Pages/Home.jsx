import React, { Suspense, use } from 'react';
import Slider from '../Component/Slider/Slider';
import PopularBookCard from '../Component/PopularBook/PopularBookCard';
import CatagoryCard from '../Component/CatagoryCard/CatagoryCard';
import SponsorSec from '../Component/Sponsor/SponsorSec';


const promisecard = fetch('/Catagory.json').then(res => res.json())

const Home = () => {
    const catagorydata= use(promisecard)


    return (
        <div>

            <Slider></Slider>

            <div className='bg-[#f4f7f9]'>
                <div className=' w-11/12 md:w-10/12 mx-auto py-6'>
                    <div className='text-center my-3.5'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Discover the most-loved reads by our community.</h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>From chart-topping fiction to must-read nonfiction, explore a diverse range of books that readers across the globe can't stop talking about. Whether it's a gripping mystery, a heartwarming romance, an inspiring biography, or a groundbreaking piece of journalism, these titles continue to spark curiosity, conversation, and a genuine love for reading.</p>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center mb-5 align-middle justify-center'>
                        <PopularBookCard></PopularBookCard>
                        <PopularBookCard></PopularBookCard> 
                        <PopularBookCard></PopularBookCard>
                        <PopularBookCard></PopularBookCard>
                    </div>
                </div>
            </div>

            {/*------------------ Catagory section -------------------*/}

            <div className='my-8'>
                <div className=' w-11/12 md:w-10/12 mx-auto py-6'>
                    <div className='text-center my-3.5'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Explore Our Book Categories.</h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>Discover books across every genre and interest. From gripping thrillers to inspiring biographies, timeless classics to trending bestsellers—our curated categories make it easy to find your next great read.</p>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4  gap-3 items-center justify-center'>
                        
                        <Suspense>
                            {
                                catagorydata.map(cat=><CatagoryCard key={cat.id} data={cat}></CatagoryCard>)
                            }
                        </Suspense>
                        
                    </div>
                </div>
            </div>

            <div className='bg-[#f4f7f9]'>
                <div className=' w-11/12 md:w-10/12 mx-auto py-6'>
                    <SponsorSec></SponsorSec>
                </div>
            </div>


        </div>
    );
};

export default Home;