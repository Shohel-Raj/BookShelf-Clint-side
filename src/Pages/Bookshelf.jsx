import React, { useState } from 'react';
import CatagoryCard from '../Component/CatagoryCard/CatagoryCard';
import PopularBookCard from '../Component/PopularBook/PopularBookCard';

const Bookshelf = () => {
    const [filter, setFilter] = useState('');



    const handleFilter = e => {
        const type = e.target.value;
        setFilter(type)
        console.log(type);
    }




    return (

        <>
            <div className='bg-[#f4f7f9]'>
                <div className='w-11/12 md:w-10/12 mx-auto py-6'>


                    <div className='text-center my-3.5'>
                        <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>
                            Explore every book on our digital shelf.
                        </h1>
                        <p className='md:w-3/4 mx-auto mb-3 small'>
                            Browse our complete library of titles—spanning every genre, voice, and story. Whether you're searching for your next great read or simply exploring what's out there, this collection is your gateway to countless adventures, insights, and unforgettable characters.
                        </p>
                    </div>


                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <p className='font-bold uppercase italic ml-3 mr-3 '>Search by book title</p>
                            <input onChange={handleFilter} className="input w-45" placeholder="Type book title for Search" />
                        </div>
                        <div className='flex gap-4 items-center mb-3.5'>
                            <p className='font-bold uppercase italic'>filtered by reading status</p>
                            <select onChange={handleFilter} value={filter} className="select w-30">
                                <option disabled>Select what you went</option>
                                <option>Read</option>
                                <option>Reading</option>
                                <option>Want-to-Read</option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>

            <div className='w-11/12 md:w-10/12 mx-auto py-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center mb-5 align-middle justify-center'>
                <PopularBookCard></PopularBookCard>
                <PopularBookCard></PopularBookCard>
                <PopularBookCard></PopularBookCard>
                <PopularBookCard></PopularBookCard>
            </div>
            </div>
        </>


    );
};

export default Bookshelf;