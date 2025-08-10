import React, { use, useState, useEffect } from 'react';
import PopularBookCard from '../Component/PopularBook/PopularBookCard';
import { useLoaderData } from 'react-router';
import EmptyMyBook from '../Component/EmptyMyBook';
import { AuthContext } from '../Contexts/AuthContext';
import Loader from '../Component/Loader/Loader';
import { toast } from 'react-toastify';

const Bookshelf = () => {
    const data = useLoaderData();
    const { user, loading } = use(AuthContext);

    const [dataa, setData] = useState(data);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [fatching, setFatching] = useState(true);

    useEffect(() => {
        document.title = `BOOKSHELF | All BOOK`;

        if (!loading) {
            let url = `${import.meta.env.VITE_ApiCall}/filtereds`;

            if (filter) {
                url = `${import.meta.env.VITE_ApiCall}/filtereds?category=${filter}`;
            }
            if (search) {
                url = `${import.meta.env.VITE_ApiCall}/filtereds?search=${search}`;
            }

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setFatching(true);
                    setData(data);
                    setFatching(false);
                })
                .catch(error => {
                    toast.error(`${error.code} found`);
                });
        }
    }, [filter, search, user, loading]);

    const handleFilter = e => {
        setFilter(e.target.value);
    };

    const handleSearc = e => {
        setSearch(e.target.value);
    };

    if (loading || fatching) {
        return <Loader />;
    }

    return (
        <>
            <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
                <div className="w-11/12 md:w-10/12 mx-auto py-6">
                    <div className="text-center my-3.5">
                        <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3">
                            Explore every book on our digital shelf.
                        </h1>
                        <p className="md:w-3/4 mx-auto mb-3 small">
                            Browse our complete library of titles—spanning every genre, voice, and story. Whether you're searching for your next great read or simply exploring what's out there, this collection is your gateway to countless adventures, insights, and unforgettable characters.
                        </p>
                    </div>

                    <div className="flex md:justify-between flex-col md:flex-row">
                        <div className="flex justify-center items-center mb-2 md:mb-0">
                            <p className="font-bold uppercase italic ml-3 mr-3">
                                Search by book title
                            </p>
                            <input
                                onChange={handleSearc}
                                className="input w-45 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
                                placeholder="Type book title for Search"
                            />
                        </div>
                        <div className="flex gap-4 items-center mb-3.5">
                            <p className="font-bold uppercase italic">
                                Filtered by reading status
                            </p>
                            <select
                                onChange={handleFilter}
                                value={filter}
                                className="select w-30 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
                            >
                                <option disabled>Select what you want</option>
                                <option>Read</option>
                                <option>Reading</option>
                                <option>Want-to-Read</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-10/12 mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-4 gap-5 mb-5 align-middle justify-center basis-1 grow">
                    {dataa?.length === 0 ? (
                        <EmptyMyBook />
                    ) : (
                        dataa?.map(cardData => (
                            <PopularBookCard key={cardData._id} cardData={cardData} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Bookshelf;
