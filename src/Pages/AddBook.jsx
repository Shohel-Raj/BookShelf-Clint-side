import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../Component/Loader/Loader';

const AddPlants = () => {
  const { user, loading } = use(AuthContext);
  const [token, setToken] = useState('');

  useEffect(() => {
    document.title = `${import.meta.env.VITE_site_name} | Add Book`;
    setToken(user?.accessToken || '');
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const addBook = Object.fromEntries(formData.entries());
    addBook.upvote = parseInt(addBook.upvote, 10);

    axios
      .post(`${import.meta.env.VITE_ApiCall}/addBook`, addBook, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success('Book Successfully added');
          e.target.reset();
        }
      })
      .catch((error) => {
        toast.error(`${error.message} found`);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto md:mt-5">
      <div className="space-y-3.5 text-center">
        <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3 dark:text-white">
          Stack One More on the Shelf
        </h1>
        <p className="md:w-3/4 mx-auto mb-3 small dark:text-gray-300">
          Add a new book to your shelf and help others discover something great to read. Share the
          title, author, and a few details to grow our community library — one story at a time.
        </p>
      </div>

      <form
        data-aos="zoom-out-right"
        data-aos-duration="1000"
        onSubmit={handleSubmit}
        className="p-10 bg-white dark:bg-gray-800 shadow my-5 rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">
          Add New Book Form
        </h2>

        <div className="grid grid-cols-1 text-black dark:text-white md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {/* Book Title */}
          <div>
            <label className="block font-medium mb-1">Book Title</label>
            <input
              required
              type="text"
              name="book_title"
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Type Book Title"
            />
          </div>

          {/* Book Category */}
          <div>
            <label className="block font-medium mb-1">Book Category</label>
            <select
              name="book_category"
              required
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="" disabled defaultChecked>
                Select Category
              </option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="History">History</option>
              <option value="Poetry">Poetry</option>
            </select>
          </div>

          {/* Reading Status */}
          <div>
            <label className="block font-medium mb-1">Reading Status</label>
            <select
              name="reading_status"
              required
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="" disabled defaultChecked>
                Select Reading Status
              </option>
              <option value="Read">Read</option>
              <option value="Reading">Reading</option>
              <option value="Want-to-Read">Want-to-Read</option>
            </select>
          </div>

          {/* Book Author */}
          <div>
            <label className="block font-medium mb-1">Book Author</label>
            <input
              type="text"
              required
              name="book_author"
              placeholder="Name of author"
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Total Page */}
          <div>
            <label className="block font-medium mb-1">Total Page</label>
            <input
              type="number"
              required
              name="total_page"
              placeholder="Total Page Number"
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block font-medium mb-1">User Email</label>
            <input
              readOnly
              type="email"
              name="userEmail"
              value={user?.email}
              className="w-full border rounded p-2 bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block font-medium mb-1">User Name</label>
            <input
              readOnly
              type="text"
              name="userName"
              value={user?.displayName}
              className="w-full border rounded p-2 bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
            />
          </div>

          {/* Upvote */}
          <div>
            <label className="block font-medium mb-1">Upvote</label>
            <input
              readOnly
              type="number"
              name="upvote"
              value={0}
              className="w-full border rounded p-2 bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
            />
          </div>

          {/* Cover Photo */}
          <div>
            <label className="block font-medium mb-1">Cover Photo</label>
            <input
              type="url"
              name="cover_photo"
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Photo URL Here"
              required
            />
          </div>

          {/* Book Overview */}
          <div className="lg:col-span-3 md:col-span-2">
            <label className="block font-medium mb-1">Book Overview</label>
            <textarea
              name="book_overview"
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="3"
              placeholder="Write few line about the book"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPlants;
