import React, { use, useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddPlants = () => {

    useEffect(() => {
        document.title = `${import.meta.env.VITE_site_name} | Add Book`
    }, [])

    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const AddPlant = Object.fromEntries(formData.entries());
        AddPlant.upvote = parseInt(AddPlant.upvote, 10);
    

        axios.post(`${import.meta.env.VITE_ApiCall}/addBook`,AddPlant).then(res=>{

            if(res.data.insertedId){
                toast.success('Book Successfullyy added')
            }
        }).catch(error=>{ 
            toast.error(`${error.massage} found`)
        })

    };



    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto md:mt-5'>

                <div className='space-y-3.5 text-center'>
                    <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Stack One More on the Shelf</h1>
                    <p className='md:w-3/4 mx-auto mb-3 small'>Add a new book to your shelf and help others discover something great to read. Share the title, author, and a few details to grow our community library — one story at a time.</p>
                </div>


                <form
                    data-aos="zoom-out-right"
                    data-aos-duration="1000"
                    onSubmit={handleSubmit}
                    className=" p-10 bg-white shadow my-5 rounded-lg space-y-4"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center text-black ">Add New Book Form</h2>

                    <div className='grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                        <div>
                            <label className="block font-medium mb-1">Book Title</label>
                            <input
                                required
                                type="text"
                                name="booktitle"
                                className="w-full border rounded p-2"
                                placeholder='Type Book Title'
                            />
                        </div>





                        <div>
                            <label className="block font-medium mb-1">Book Category</label>
                            <select
                                name="book_category "
                                required
                                className="w-full border rounded p-2"
                            >
                                <option value="" selected disabled>Select Category</option>
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
                                className="w-full border rounded p-2"
                            >
                                <option value="" selected disabled>Select Reading Status</option>
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
                                placeholder="Name of author"
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Total Page</label>
                            <input
                                type="number"
                                required
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
                                value={user?.email}
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">User Name</label>
                            <input
                                readOnly
                                type="text"
                                name="userName"
                                value={user?.displayName}
                                className="w-full border rounded p-2"

                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Upvote</label>
                            <input
                                readOnly
                                type="number"
                                name="upvote"
                                value={0}
                                className="w-full border rounded p-2"

                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Cover Photo</label>
                            <input
                                type="url"
                                name="cover_photo"
                                className="w-full border rounded p-2"
                                placeholder='Photo URL Here'
                                required
                            />
                        </div>
                        <div className='lg:col-span-3  md:col-span-2'>
                            <label className="block font-medium mb-1">Book Overview</label>
                            <textarea
                                name="book_overview"
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
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPlants;