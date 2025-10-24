import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Component/Loader/Loader";
// import { AuthContext } from "../../Contexts/AuthContext";
// import Loader from "../../components/Loader/Loader";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOverview = async () => {
      if (!user?.accessToken) return;

      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_ApiCall}/admin/overview`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        setOverview(res.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, [user]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-600 font-medium text-center mt-10">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Admin Dashboard</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Total Users</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{overview.totalUsers}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Total Books</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{overview.totalBooks}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Total Reviews</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{overview.totalReviews}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Total Subscriptions</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{overview.totalSubscriptions}</p>
        </div>
      </div>

      {/* Top Books Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Top 5 Books by Upvotes</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Title</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Category</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Upvotes</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Author Email</th>
            </tr>
          </thead>
          <tbody>
            {overview.topBooks.map((book) => (
              <tr key={book._id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{book.book_title}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{book.book_category}</td>
                <td className="px-4 py-2 text-green-600 font-bold">{book.upvote}</td>
                <td className="px-4 py-2 text-gray-600 dark:text-gray-300">{book.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
