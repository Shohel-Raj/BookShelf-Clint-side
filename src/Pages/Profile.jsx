import React from 'react';

const Profile = () => {
    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto py-6 '>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>

                    {/* ------------left side ----------------- */}

                    <div className="grid justify-center py-10 rounded-2xl items-center col-span-1  shadow-2xl">

                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                        <div className='mt-6 space-y-3'>
                            <h1>Name: </h1>
                            <p>Email: </p>
                        </div>
                    </div>

                    {/* ------------right side ----------------- */}

                    <div className="profileDetails lg:col-span-3 py-10 rounded-2xl shadow-2xl px-5 md:px-10">
                        {/* ------------------ summary of added book by catagory ---------------- */}
                        <div>
                            <h1 className='font-bold uppercase mb-6 text-2xl'>summary of added book :</h1>
                            <hr className='border-t-1 border-dashed mb-3.5' />
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-3'>
                                <div className='flex flex-row md:flex-col justify-between border-b-2 md:border-b-0'>
                                    <div className='uppercase font-bold italic'>category</div>
                                    <div className='uppercase font-bold italic'>added Book </div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>Fantacy</div>
                                    <div>0</div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>Fiction</div>
                                    <div>0</div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>history</div>
                                    <div>0</div>
                                </div>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <div className='uppercase font-bold italic'>poetry</div>
                                    <div>0</div>
                                </div>

                            </div>
                        </div>



                        {/* Graphical view of added book */}

                        <div className='mt-10'>
                            <h1 className='font-bold uppercase mb-6 text-2xl'>Graphical view of added book :</h1>
                            <hr className='border-t-1 border-dashed mb-3.5' />



                        </div>



                    </div>
                </div>

            </div>
        </>
    );
};

export default Profile;