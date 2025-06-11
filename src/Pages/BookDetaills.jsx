import React from 'react';
import { useLoaderData } from 'react-router';
import DetailsCard from '../Component/Viewdetails/DetailsCard';
import DetailsEmpty from '../Component/Viewdetails/DetailsEmpty';
import ReviewCard from '../Component/ReviewCard/ReviewCard';
import ReviewForm from '../Component/ReviewCard/ReviewForm';

const BookDetaills = () => {
    const datas = useLoaderData();


    return (
        <>
            <div className='bg-[#f4f7f9]'>
                <div className='w-11/12 md:w-10/12 mx-auto py-6'>
                    <div className='text-center my-3.5'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Uncover the story behind the book everyone’s talking about.</h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>Step into the world of a book that’s captured hearts and sparked imaginations. From unforgettable characters to powerful storytelling, this title stands out among the rest. Whether you're here for a sneak peek, a deeper understanding, or simply curious about what makes this book a favorite, you'll find everything you need to connect with the story—and the readers who love it.</p>

                    </div>

                    {
                        datas ? <DetailsCard data={datas}></DetailsCard> : <DetailsEmpty></DetailsEmpty>
                    }



                </div>
            </div>

            <div className='w-11/12 md:w-10/12 mx-auto py-6'>
                <div className='text-center my-3.5'>
                    <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>See what readers are saying about this book.</h1>
                    <p className='md:w-3/4 mx-auto mb-3 small'>
                        Dive into honest reviews and heartfelt reactions from readers around the world. Whether it's praise for compelling characters, reflections on emotional moments, or thoughtful critiques, each review offers a unique perspective. Discover how this story resonates with others—and share your own thoughts too.
                    </p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl md:text-2xl uppercase italic mb-3'>reviews are :</h1>
                    <hr className='border-t-1 border-dashed mb-3.5' />

                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>

                </div>
                <ReviewForm datas={datas}></ReviewForm>



            </div>
        </>
    );
};

export default BookDetaills;