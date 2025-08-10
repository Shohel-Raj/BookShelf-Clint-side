import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import DetailsCard from '../Component/Viewdetails/DetailsCard';
import DetailsEmpty from '../Component/Viewdetails/DetailsEmpty';
import ReviewCard from '../Component/ReviewCard/ReviewCard';
import ReviewForm from '../Component/ReviewCard/ReviewForm';
import axios from 'axios';
import EmptyReview from '../Component/ReviewCard/EmptyReview';
import Swal from 'sweetalert2';
import ReadStatus from '../Component/Stepper/ReadStatus';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthContext';
import EmptyBookDetails from '../Component/EmptyBookDetails';
import Loader from '../Component/Loader/Loader';

const BookDetaills = () => {
  const { user, loading } = use(AuthContext);
  const datas = useLoaderData();

  const [review, setReview] = useState([]);
  const [reviewed, setReviewed] = useState(false);
  const [render, setReRender] = useState(true);
  const [readingStatus, setReadingStatus] = useState('');

  useEffect(() => {
    document.title = `${import.meta.env.VITE_site_name} | Book Details`;

    const token = user?.accessToken || '';

    if (render && datas?._id) {
      axios
        .get(`${import.meta.env.VITE_ApiCall}/review/${datas._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setReview(res.data);
          setReRender(false);
        })
        .catch((error) => {
          toast.error(`${error.code || 'Error'} occurred while fetching reviews.`);
        });
    }
  }, [datas, user, render]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        if (!id) {
          return toast.error('ID not found, reload page and try again');
        }

        fetch(`${import.meta.env.VITE_ApiCall}/review/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingData = review.filter((d) => d._id !== id);
              setReview(remainingData);
              setReviewed(false);
              Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
            }
          });
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (!datas || Object.keys(datas).length === 0) {
    return <EmptyBookDetails />;
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <div className="text-center my-3.5">
            <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3 text-gray-900 dark:text-gray-100">
              Uncover the story behind the book everyone’s talking about.
            </h1>
            <p className="md:w-3/4 mx-auto mb-3 small text-gray-700 dark:text-gray-300">
              Step into the world of a book that’s captured hearts and sparked imaginations. From unforgettable characters to powerful storytelling, this title stands out among the rest. Whether you're here for a sneak peek, a deeper understanding, or simply curious about what makes this book a favorite, you'll find everything you need to connect with the story—and the readers who love it.
            </p>
          </div>

          {datas ? (
            <DetailsCard
              data={datas}
              readingStatus={readingStatus}
              // You might want to add dark mode styling inside DetailsCard as well
            />
          ) : (
            <DetailsEmpty />
          )}

          <div className="text-center my-3.5">
            <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3 text-gray-900 dark:text-gray-100">
              Update your Reading Track
            </h1>
            <hr className="border-t border-dashed border-gray-300 dark:border-gray-600 mb-3.5" />

            <ReadStatus datas={datas} setReadingStatus={setReadingStatus} />
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto py-6">
        <div className="text-center my-3.5">
          <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3 text-gray-900 dark:text-gray-100">
            See what readers are saying about this book.
          </h1>
          <p className="md:w-3/4 mx-auto mb-3 small text-gray-700 dark:text-gray-300">
            Dive into honest reviews and heartfelt reactions from readers around the world. Whether it's praise for compelling characters, reflections on emotional moments, or thoughtful critiques, each review offers a unique perspective. Discover how this story resonates with others—and share your own thoughts too.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl md:text-2xl uppercase italic mb-3 text-gray-900 dark:text-gray-100">Reviews are :</h1>
          <hr className="border-t border-dashed border-gray-300 dark:border-gray-600 mb-3.5" />
          {review.length > 0 ? (
            review.map((rev, index) => (
              <ReviewCard
                key={rev?._id || index}
                rev={rev}
                setReviewed={setReviewed}
                setReview={setReview}
                handleDelet={handleDelete}
                setReRender={setReRender}
                // Ensure ReviewCard supports dark mode styling as well
              />
            ))
          ) : (
            <EmptyReview />
          )}
        </div>
      </div>

      {!reviewed && (
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <h1 className="font-bold text-2xl md:text-2xl uppercase italic mb-3 text-gray-900 dark:text-gray-100">
            Please add your review:
          </h1>
          <hr className="border-t border-dashed border-gray-300 dark:border-gray-600 mb-3.5" />
          <ReviewForm datas={datas} setReview={setReview} setReRender={setReRender} />
        </div>
      )}
    </>
  );
};

export default BookDetaills;
