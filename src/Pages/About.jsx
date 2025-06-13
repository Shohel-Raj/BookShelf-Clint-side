import React, { Suspense, use } from 'react';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import Loader from '../Component/Loader/Loader';


const promisecard = fetch('/team.json').then(res => res.json())

const About = () => {

        const catagorydata = use(promisecard)
    

    return (
        <div className='w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-200px)]'>

            {/* Hero Section */}

            <div className='text-center my-3.5'>
                <h1 className='font-bold text-2xl md:text-3xl uppercase italic mb-3'>Meet our team</h1>
                <p className='md:w-3/4 mx-auto mb-3 small'>Where book lovers gather, explore, and share. Bookshelf is your digital library
                    to discover, upvote, and celebrate great reads together.</p>

            </div>

            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">

                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

                        <Suspense fallback={<Loader/>}>
                            {
                                catagorydata.map(cat => <div key={cat.id} className="card card-side bg-base-100 shadow-sm">
                            <figure className='h-60 w-56'>
                                <img
                                className='h-full  w-full object-cover object-center'
                                    src={cat.img}
                                    alt="img" />
                            </figure>
                            <div className="card-body">
                                <div className="flex flex-col space-y-2">
                                <h4 className="text-xl font-semibold card-title">{cat.name}</h4>
                                <p className="text-sm dark:text-gray-600">{cat.role}</p>
                                <div className="flex mt-2 space-x-2">
                                    <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
                                        <FaTwitterSquare size={20}/>

                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
                                        <FaLinkedin size={20}/>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
                                        <FaGithubSquare size={20}/>

                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>)
                            }
                        </Suspense>
                        

                        

                    </div>
                </div>
            </section>




        </div>
    );
};

export default About;