import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import DetailsCard from '../Component/Viewdetails/DetailsCard';
import DetailsEmpty from '../Component/Viewdetails/DetailsEmpty';
import ReviewCard from '../Component/ReviewCard/ReviewCard';
import ReviewForm from '../Component/ReviewCard/ReviewForm';
import axios from 'axios';
import EmptyReview from '../Component/ReviewCard/EmptyReview';
import Swal from 'sweetalert2';

const BookDetaills = () => {
    const datas = useLoaderData();
    const [review, setReview] = useState([])
    const [reviewed, setReviewed] = useState(false);




    useEffect(() => {





        axios.get(`${import.meta.env.VITE_ApiCall}/review/${datas._id}`).then(res => {
            setReview(res.data);
        }).catch(error => {
            console.log(`${error.code} error found`);
        })




    }, [datas])

    const handleDelet = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_ApiCall}/review/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()).then((data => {
                        console.log(data);

                        if (data.deletedCount) {
                            const remainigData = review.filter(d => d._id !== id);
                            setReview(remainigData)
                            setReviewed(false);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Plant has been deleted.",
                                icon: "success"
                            });
                        }
                    }))

            }
        });

    }


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
                    {
                        review.length > 0 ? review?.map(rev => <ReviewCard key={rev?._id} rev={rev} setReview={setReview} handleDelet={handleDelet} setReviewed={setReviewed}></ReviewCard>) : <EmptyReview></EmptyReview>
                    }
                    {/* <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard> */}

                </div>


            </div>


            {
                !reviewed && <><div className='w-11/12 md:w-10/12 mx-auto py-6'>
                    <h1 className='font-bold text-2xl md:text-2xl uppercase italic mb-3'>please add your review :</h1>
                    <hr className='border-t-1 border-dashed mb-3.5' />
                    <ReviewForm datas={datas} setReview={setReview}></ReviewForm>
                </div></>
            }
        </>
    );
};

export default BookDetaills;