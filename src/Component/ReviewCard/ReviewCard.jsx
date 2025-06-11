import React from 'react';

const ReviewCard = () => {
    return (
        <>
            <div className="container flex flex-col w-full shadow p-6 mx-auto divide-y rounded-md">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        {/* <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full" />
                        </div> */}
                        <div>
                            <h4 className="font-bold"> Name : Leroy Jenkins</h4>
                            <span className="text-xs">added Date:  2 days ago</span>
                        </div>
                    </div>
                    
                </div>
                <div className="p-4 space-y-2 text-sm">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;