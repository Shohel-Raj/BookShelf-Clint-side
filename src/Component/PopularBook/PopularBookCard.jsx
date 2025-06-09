import React from 'react';
import { Link } from 'react-router';



const PopularBookCard = () => {
  return (
    <div
      data-aos="zoom-out-right"
      data-aos-duration="1000"
      className=" rounded-lg overflow-hidden shadow-md bg-white mb-4">
      {/* Book Cover */}
      <img
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" // Replace with your book image
        alt="Book Cover"
        className="w-full h-64 object-cover"
      />

      {/* Book Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">The Silent Patient</h2>
        <p className="text-sm text-gray-600 mt-1">
          A psychological thriller about a woman’s act of violence against her husband—and the therapist obsessed with uncovering why.
        </p>



        <div className="mt-4 flex gap-2">
          <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800">
            UpVote
          </button>
          <Link to={`/bookdetails/:id`} className="text-sm text-black px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularBookCard;
