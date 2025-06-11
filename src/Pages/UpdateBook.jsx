import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdateBook = () => {

    const data = useLoaderData();
    const { _id, userName, userEmail, book_author, upvote, total_page, reading_status, cover_photo, book_title, book_overview, book_category } = data;

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const upDate = Object.fromEntries(formData.entries());
        upDate.upvote = parseInt(upDate.upvote, 10);




        axios.put(`${import.meta.env.VITE_ApiCall}/book/${_id}`, upDate).then(res => {
            if (res.data.modifiedCount) {
                toast.success('Update Successfuly')
            } else if (res.data.matchedCount) {
                toast.warn(`You didn't change  any data yet`)
            }
        }).catch(error => {
            toast.error(`${error.massage} found try again`)
        })
    }


    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto md:mt-5'>

                <div className='space-y-3.5 text-center'>
                    <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Give Your Book a Fresh Chapter</h1>
                    <p className='md:w-3/4 mx-auto mb-3 small'>Make changes to a book entry to keep it fresh and helpful for fellow readers. From new insights to improved info, your updates keep our library thriving—one page at a time.</p>
                </div>


                <form
                    data-aos="zoom-out-right"
                    data-aos-duration="1000"
                    onSubmit={handleUpdate}
                    className=" p-10 bg-white shadow my-5 rounded-lg space-y-4"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center text-black ">Book Update Form</h2>

                    <div className='grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                        <div>
                            <label className="block font-medium mb-1">Book Title</label>
                            <input
                                required
                                type="text"
                                name="booktitle"
                                defaultValue={book_title}
                                className="w-full border rounded p-2"
                                placeholder='Type Book Title'
                            />
                        </div>





                        <div>
                            <label className="block font-medium mb-1">Book Category</label>
                            <select
                                name="book_category"
                                required
                                defaultValue={book_category}
                                className="w-full border rounded p-2"
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Fiction">Fiction</option>
                                <option value="History">History</option>
                                <option value="Poetry">Poetry</option>
                            </select>
                        </div>



                        <div>
                            <label className="block font-medium mb-1">Reading Status</label>
                            <select
                                name="reading_status"
                                required
                                defaultValue={reading_status}
                                className="w-full border rounded p-2"
                            >
                                <option value="" disabled>Select Reading Status</option>
                                <option value="Read">Read</option>
                                <option value="Reading">Reading</option>
                                <option value="Want-to-Read">Want-to-Read</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Book Author</label>
                            <input
                                type="text"
                                required
                                name="book_author"
                                defaultValue={book_author}
                                placeholder="Name of author"
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Total Page</label>
                            <input
                                type="number"
                                required
                                defaultValue={total_page}
                                name="total_page"
                                placeholder='Total Page Number'
                                className="w-full border rounded p-2"
                            />
                        </div>


                        <div>
                            <label className="block font-medium mb-1">User Email</label>
                            <input
                                readOnly
                                type="email"
                                name="userEmail"
                                value={userEmail}
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">User Name</label>
                            <input
                                readOnly
                                type="text"
                                name="userName"
                                value={userName}
                                className="w-full border rounded p-2"

                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Upvote</label>
                            <input
                                readOnly
                                type="number"
                                name="upvote"
                                defaultValue={upvote}
                                className="w-full border rounded p-2"

                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Cover Photo</label>
                            <input
                                type="url"
                                name="cover_photo"
                                defaultValue={cover_photo}
                                className="w-full border rounded p-2"
                                placeholder='Photo URL Here'
                                required
                            />
                        </div>
                        <div className='lg:col-span-3  md:col-span-2'>
                            <label className="block font-medium mb-1">Book Overview</label>
                            <textarea
                                name="book_overview"
                                defaultValue={book_overview}
                                className="w-full border rounded p-2"
                                rows="3"
                                placeholder='Write few line abouth the book'
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </>
    );
};

export default UpdateBook;