import React, { use, useState } from 'react';
import CatagoryCard from '../Component/CatagoryCard/CatagoryCard';
import PopularBookCard from '../Component/PopularBook/PopularBookCard';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import EmptyMyBook from '../Component/EmptyMyBook';
import { AuthContext } from '../Contexts/AuthContext';
import Loader from '../Component/Loader/Loader';
import { toast } from 'react-toastify';
import EmptyBookShelf from '../Component/EmptyBookShelf';


const Bookshelf = () => {

    const data = useLoaderData();
    const { user, loading } = use(AuthContext);



    const [dataa, setData] = useState(data);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const[fatching,setFatching]=useState(true);
    


    useEffect(() => {
        document.title = `BOOKSHELF | All BOOK`


        // const token = user?.accessToken;

        if (!loading) {
            let url = `${import.meta.env.VITE_ApiCall}/filtereds`

            if (filter) {
                url = `${import.meta.env.VITE_ApiCall}/filtereds?category=${filter}`
            }

            if (search) {
                url = `${import.meta.env.VITE_ApiCall}/filtereds?search=${search}`
            }

            // } else (
            //     url = 'https://plant-care-server-azure.vercel.app/allPlant?order=desc'
            // )

            fetch(url).then(res => res.json()).then(data => {
                setFatching(true);
                setData(data);
                setFatching(false)
            }).catch(error => {
                toast.error(`${error.code} found`)
            })
        }


    }, [filter, search, user, loading])



    const handleFilter = e => {
        const type = e.target.value;
        setFilter(type)

    }
    const handleSearc = e => {
        const type = e.target.value;
        setSearch(type)

    }
    if (loading) {

        return <Loader></Loader>
    }
    if (fatching) {

        return <Loader></Loader>
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


                            <div className='flex md:justify-between flex-col md:flex-row'>
                                <div className='flex justify-center items-center mb-2 md:mb-0'>
                                    <p className='font-bold uppercase italic ml-3 mr-3 '>Search by book title</p>
                                    <input onChange={handleSearc} className="input w-45" placeholder="Type book title for Search" />
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
                <div className='grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-4 gap-5  mb-5 align-middle justify-center basis-1 grow'>


                    {
                         !!dataa?.length == 0 ? <EmptyMyBook></EmptyMyBook> : <>
                            {dataa?.map(cardData => <PopularBookCard key={cardData._id} cardData={cardData}></PopularBookCard>)}

                        </>
                    }
                   
                </div>
            </div>
        </>


    );
};

export default Bookshelf;