import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaAnglesUp } from 'react-icons/fa6';
import axios from 'axios';

import { toast } from 'react-toastify';

const DetailsCard = ({ data, readingStatus }) => {

    const [upvotestate, setUpvote] = useState();


    const { user } = use(AuthContext);

    const { _id, userName, userEmail, book_author, upvote, total_page, cover_photo, book_title, book_overview, book_category } = data;

    useEffect(() => {
        document.title = `${import.meta.env.VITE_site_name} | BookDetails`


        setUpvote(upvote)
    }, [upvote])

    const handleUpdate = () => {
    if (user.email === userEmail) {
        toast.error(`You can't Upvote your own Book`);
        return;
    }

    const nextUpvote = parseInt(upvotestate || 0, 10) + 1;
    setUpvote(nextUpvote);

    const upDate = {
        upvote: nextUpvote
    };

    axios.patch(`${import.meta.env.VITE_ApiCall}/book/${_id}`, upDate)
        .then(res => {
            if (res.data.modifiedCount) {
                toast.success('Upvoted successfully');
            }
        })
        .catch(error => {
            toast.error(`${error.message || 'Error'} occurred, try again`);
        });
};


    return (
        <div>
            <div className="grid grid-rows-1 md:grid-cols-3 shadow-xl rounded-2xl py-5 px-3 gap-6 ">
                <div className='rounded-2xl md:w-[390px] h-[415px]'>
                    <img className='w-full h-full rounded-2xl' src={cover_photo} alt="" />
                </div>
                <div className='md:col-span-2'>
                    <h1 className='font-bold text-2xl mb-4 uppercase italic'>📚 details of {book_title} :</h1>
                    <div>

                        <div className='space-y-3'>
                            <div className='flex gap-1.5'><h4>Name :</h4>  <p>{book_title}</p></div>
                            <div className='flex gap-1.5'><h4>Category :</h4>  <p>{book_category}</p></div>
                            <div className='flex gap-1.5'><h4>Book Author :</h4>  <p>{book_author}</p></div>
                            <div className='flex gap-1.5'><h4>Reading Status :</h4>  <p>{readingStatus}</p></div>
                            <div className='flex gap-1.5'><h4>Total Page :</h4>  <p>{total_page}</p></div>
                            <div className='grid gap-1.5 md:grid-cols-12 '><h4 className='md:col-span-1 '>Details :</h4> <p className='md:col-span-11'>{book_overview}</p></div>
                            <div className='flex gap-1.5'><h4>Upvote :</h4> <p>{upvotestate} </p></div>
                        </div>
                        <div className='space-y-2 mt-2.5'>
                            <h1 className='text-gray-400'>Added by : <small className='italic'> {userName} </small></h1>
                            <h1 className='text-gray-400'>Email : <small className='italic'> {userEmail} </small></h1>
                        </div>
                        <div onClick={handleUpdate} className=' bg-[#34eb74] w-[100px] mt-1.5 flex justify-center items-center gap-2 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer'>
                            <FaAnglesUp size={20} />

                            <p>
                                UpVote
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;