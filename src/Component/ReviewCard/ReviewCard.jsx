import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReviewCard = ({ rev, setReviewed, handleDelet }) => {


    const { user } = use(AuthContext);
    const [closed, setClosed] = useState(false)
    const modalRef = useRef(null);




    const { rewiev, _id, user_name, date, user_email } = rev;


    // setShowReview(rewiev)

    useEffect(() => {


        if (user?.email === user_email) {
            setReviewed(true)
        }


        if (closed && modalRef.current) {
            modalRef.current.close();
        }
    }, [setReviewed, user, user_email, closed,])



    const handleUpdate = () => {

        document.getElementById('my_modal_1').showModal()
    }
    const handleUpdateModal = (e) => {
        // e.preventDefault();
        const formData = new FormData(e.target);
        const updateReview = Object.fromEntries(formData.entries());
        const today = format(new Date(), 'dd-MM-yyyyy'); // or any format you prefer


        updateReview.date = today;
        // updateReview.user_email =user?.email;
        // updateReview.user_name = user?.displayName;




        axios.patch(`${import.meta.env.VITE_ApiCall}/review/${rev?._id}`, updateReview).then(res => {
            if (res.data.modifiedCount) {

                toast.success('Review Update Successfuly');

                setClosed(true)
            } else if (res.data.matchedCount) {
                toast.warn(`You didn't change  any data yet`)
                setClosed(true)
            }
        }).catch(error => {
            toast.error(`${error.massage} found try again`)
            setClosed(true)
        })

    }




    return (
        <>
            <div className="container flex flex-col w-full shadow p-6 mx-auto divide-y rounded-md">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        {/* <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full" />
                        </div> */}
                        <div>
                            <h4 className="font-bold"> Name : {user_name}</h4>
                            <span className="text-xs">added Date:  {date}</span>
                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm">
                    <p>
                        {rewiev}
                       
                    </p>

                    {
                        user?.email === user_email && <>
                            <button onClick={() => handleUpdate(rev?._id)} className="uppercase btn md:mr-1 mb-1 md:mb-0 btn-xs">Update</button>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}

                            <dialog id="my_modal_1" className="modal" ref={modalRef}>
                                <div className="modal-box">
                                    <form onSubmit={handleUpdateModal}>
                                        <div className="flex flex-col items-center w-full space-y-5">
                                            <h2 className="text-3xl font-semibold text-center">Update opinion </h2>

                                            <div className="flex flex-col w-full">
                                                <textarea rows="3" placeholder="Message..." defaultValue={rewiev} name='rewiev' className="p-4 rounded-md  w-full resize-none textarea textarea-accent textarea-xl "></textarea>
                                                <button type="submit" className="py-4 my-8 btn  btn-accent btn-outline font-semibold rounded-md uppercase">Update feedback</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            <button onClick={() => handleDelet(rev?._id)} className="uppercase btn btn-xs">Delete</button>
                        </>
                    }

                </div>

            </div>
        </>
    );
};


export default ReviewCard;


