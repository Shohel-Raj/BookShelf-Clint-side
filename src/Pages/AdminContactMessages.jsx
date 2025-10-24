import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Component/Loader/Loader";

const AdminContactMessages = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
  const fetchMessages = async () => {
    if (!user?.accessToken) return;

    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_ApiCall}/contact-us`, {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      });
      setMessages(res.data.messages);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

    fetchMessages();
  }, [user]);

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="p-6 w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Contact Messages
      </h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-1/2"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Email</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Subject</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Message</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredMessages.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500 dark:text-gray-300">
                  No messages found.
                </td>
              </tr>
            ) : (
              filteredMessages.map((msg) => (
                <tr key={msg._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{msg.name}</td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300">{msg.email || "-"}</td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300">{msg.subject || "-"}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{msg.message}</td>
                  <td className="px-4 py-2 text-gray-500 dark:text-gray-300">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContactMessages;
