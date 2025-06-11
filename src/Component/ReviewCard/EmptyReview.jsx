import React from 'react';

const EmptyReview = () => {
    return (
        <>
            <div className="container flex flex-col w-full shadow p-6 mx-auto divide-y rounded-md">
                <div className="text-center p-4">

                    <h1 className='text-2xl italic'>No Review found</h1>

                </div>
            </div>
        </>
    );
};

export default EmptyReview;