import axios from "axios";

const API_URL = "https://localhost:8080/api/ratings";

export const addRating = async (ratingData) => {
  await axios.post("http://localhost:8080/api/ratings", ratingData);
};

export const fetchAllRatings = async () => {
  return await axios.get("http://localhost:8080/api/ratings");
};
