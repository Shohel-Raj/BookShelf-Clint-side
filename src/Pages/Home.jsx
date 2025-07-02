import React, { Suspense, use, useEffect } from 'react';
import Slider from '../Component/Slider/Slider';
import PopularBookCard from '../Component/PopularBook/PopularBookCard';
import CatagoryCard from '../Component/CatagoryCard/CatagoryCard';
import SponsorSec from '../Component/Sponsor/SponsorSec';
import FaqComponent from '../Component/FAQ/FaqComponent';
import Lottie from 'lottie-react';
import FaqLottie from '../Component/FAQ/FaqLottie';

import 'aos/dist/aos.css';
import Aos from 'aos';
import { useLoaderData } from 'react-router';

Aos.init();


const promisecard = fetch('/Catagory.json').then(res => res.json())

const Home = () => {
    const catagorydata = use(promisecard)

    const data = useLoaderData();


    useEffect(()=>{
         document.title = `${import.meta.env.VITE_site_name} | Home`
    },[])

    return (
        <div>

            <Slider></Slider>

            <div className='bg-[#f4f7f9]'>
                <div className=' w-11/12 md:w-10/12 mx-auto py-6'>
                    <div className='text-center my-3.5 space-y-2'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Discover the most-loved reads by our community.</h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>From chart-topping fiction to must-read nonfiction, explore a diverse range of books that readers across the globe can't stop talking about. Whether it's a gripping mystery, a heartwarming romance, an inspiring biography, or a groundbreaking piece of journalism, these titles continue to spark curiosity, conversation, and a genuine love for reading.</p>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-5  mb-5 basis-1 align-middle justify-center'>


                        {
                            data?.map(cardData => <PopularBookCard key={cardData._id} cardData={cardData}></PopularBookCard>)
                        }
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
                                catagorydata.map(cat => <CatagoryCard key={cat.id} data={cat}></CatagoryCard>)
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

            <div
                
                className='my-16'>
                <div className=' w-11/12 md:w-10/12 mx-auto py-6'>
                    <div className='text-center my-3.5'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Frequently Asked Questions</h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>We’re happy to answer your questions and share helpful insights — making it easier for you to explore, enjoy, and get the most out of your journey with Books Shelf. Whether you're new here or a longtime reader, we’re here to support your love of books every step of the way.</p>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-10'>
                        <FaqComponent></FaqComponent>
                        <FaqLottie></FaqLottie>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Home;