import React from 'react';
import { format } from 'date-fns';



const ReviewForm = ({ datas }) => {

    const { _id, userEmail,userName } = datas;

    const handleReview = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const review = Object.fromEntries(formData.entries());
        const today = format(new Date(), 'dd-MM-yyyyy'); // or any format you prefer


        review.date = today;
        review.book_id = _id;
        review.user_email = userEmail;
        review.user_name = userName;




        console.log(review);
    }

    return (
        <>

            <form onSubmit={handleReview}>
                <div className="flex flex-col  p-8 shadow-xl rounded-xl mt-5 lg:p-12">
                    <div className="flex flex-col items-center w-full space-y-5">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>

                        <div className="flex flex-col w-full">
                            <textarea rows="3" placeholder="Message..." name='rewiev' className="p-4 rounded-md  w-full resize-none textarea textarea-accent textarea-xl "></textarea>
                            <button type="submit" className="py-4 my-8 btn  btn-accent btn-outline font-semibold rounded-md uppercase">Leave feedback</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ReviewForm;