import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaAnglesUp } from 'react-icons/fa6';
import axios from 'axios';

import { toast } from 'react-toastify';

const DetailsCard = ({ data,readingStatus }) => {

    const [upvotestate, setUpvote] = useState();


    const { user } = use(AuthContext);

    const { _id, userName, userEmail, book_author, upvote, total_page,  cover_photo, book_title, book_overview, book_category } = data;

    useEffect(() => {
        document.title = `${import.meta.env.VITE_site_name} | BookDetails`


        setUpvote(upvote)
    }, [upvote])

    const handleUpdate = () => {


        if (user?.email !== userEmail) {
       

            setUpvote(prev => parseInt(prev, 10) + 1);

        }
        if (user.email == userEmail) {

            toast.error(`You can't Upvote your own Book`)
        }


        const upDate = {
            upvote: parseInt(upvotestate)
        }




        axios.patch(`${import.meta.env.VITE_ApiCall}/book/${_id}`, upDate).then(res => {
            if (res.data.modifiedCount) {
                toast.success('Upvote Successfuly')

            }
        }).catch(error => {
            toast.error(`${error.massage} found try again`)
        })
    }


    return (
        <div>
            <div className="grid grid-rows-1 md:grid-cols-3 shadow-xl rounded-2xl py-5 px-3 gap-6 ">
                <div className='rounded-2xl'>
                    <img className='w-[250px] rounded-2xl' src={cover_photo} alt="" />
                </div>
                <div className='col-span-2'>
                    <h1 className='font-bold text-2xl mb-4 uppercase italic'>📚 details of {book_title} :</h1>
                    <div>

                        <div className='space-y-3'>
                            <h4 className='flex gap-1.5'>Name : <p>{book_title}</p></h4>
                            <h4 className='flex gap-1.5'>Category : <p>{book_category}</p></h4>
                            <h4 className='flex gap-1.5'>Book Author : <p>{book_author}</p></h4>
                            <h4 className='flex gap-1.5'>Reading Status : <p>{readingStatus}</p></h4>
                            <h4 className='flex gap-1.5'>Total Page : <p>{total_page}</p></h4>
                            <h4 className='flex gap-1.5 '><p className='w-20'>Details :</p> <p>{book_overview}</p></h4>
                            <h4 className='flex gap-1.5'>Upvote : <p>{upvotestate} </p></h4>
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