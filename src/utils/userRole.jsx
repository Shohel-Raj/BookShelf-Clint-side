import axios from "axios";

export const getUserRole = async (email, token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_ApiCall}/get-user-role?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data; // includes role and user info
  } catch (error) {
    console.error("Error fetching user role:", error.response?.data || error.message);
    throw error;
  }
};