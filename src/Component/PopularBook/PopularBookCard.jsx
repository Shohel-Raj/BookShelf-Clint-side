import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const PopularBookCard = ({ cardData }) => {
  const { book_author, book_category, book_overview, book_title, cover_photo, upvote, _id } = cardData;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <img
        src={cover_photo}
        alt={book_title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow gap-3">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{book_title}</h2>

        <div className="text-sm text-gray-500 flex justify-between">
          <span>{book_author}</span>
          <span>{book_category}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">{book_overview}</p>

        <div className="mt-auto flex gap-3">
          <button className="px-4 py-1.5 text-sm bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition">
            Upvote {upvote}
          </button>
          <Link
            to={`/bookdetails/${_id}`}
            className="px-4 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularBookCard;
