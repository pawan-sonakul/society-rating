import axios from "axios";

// Base API URL for Railway backend
const API_URL = "https://society-rating-api.up.railway.app/api";

export const addRating = async (ratingData) => {
  await axios.post(`${API_URL}/ratings`, ratingData);
};

export const fetchAllRatings = async () => {
  return await axios.get(`${API_URL}/ratings`);
};

export const addContactUs = async (contactData) => {
  await axios.post(`${API_URL}/admin/contact`, contactData);
};

export const fetchAllContacts = async () => {
  return await axios.get(`${API_URL}/admin/contact`);
};
