import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';




const PopularBookCard = ({ cardData }) => {


  const { book_author, book_category, book_overview, book_title, cover_photo, upvote, _id } = cardData;


  return (
    <motion.div

      data-aos="zoom-out-right"
      data-aos-duration="1000"


      className="flex flex-col rounded-lg overflow-hidden shadow-md bg-white mb-4 h-full">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5 }}
      >

        <img

          src={cover_photo} // Replace with your book image
          alt="Book Cover"
          className="w-full h-64 object-cover"
        />

        {/* Book Info */}
        <div className="p-4 flex-grow  basis-1 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900">{book_title}</h2>
          <div className='flex justify-between my-1.5'>
            <p className='badge badge-outline badge-primary'>{book_author}</p>
            <p className='badge badge-soft badge-accent'>{book_category}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">{book_overview} </p>



          <div className="mt-4 flex gap-2">
            <button className="bg-[#34eb74] text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
              UpVote {upvote}
            </button>
            <Link to={`/bookdetails/${_id}`} className="text-sm text-black px-4 py-2 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-100">
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
      {/* Book Cover */}

    </motion.div>
  );
};

export default PopularBookCard;
