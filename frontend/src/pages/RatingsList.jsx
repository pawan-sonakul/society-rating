import React, { useEffect, useState } from 'react';
import { fetchAllRatings } from '../api/apiHandler';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RatingsList = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetchAllRatings();
        setRatings(response.data);
      } catch (error) {
        toast.error("Error fetching data!");
      }
    };

    fetchRatings();
  }, []);

  const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
};

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">All Society Ratings</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover table-sm text-nowrap">
          <thead className="table-dark">
            <tr>
              <th>Sr No.</th>
              <th>Resident</th>
              <th>Management</th>
              <th>Amenities</th>
              <th>Security</th>
              <th>Cleanliness</th>
              <th>Average</th>
              <th>Submitted At</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating, index) => (
              <tr key={rating.id || index}>
                <td>{index + 1}</td>
                <td>
                  {rating.anonymous || !rating.residentName?.trim()
                    ? "Anonymous"
                    : rating.residentName}
                </td>
                <td>{rating.managementRating}</td>
                <td>{rating.amenitiesRating}</td>
                <td>{rating.securityRating}</td>
                <td>{rating.cleanlinessRating}</td>
                <td>{rating.averageRating?.toFixed(2)}</td>
                <td>{formatDate(rating.createdAt)}</td>
                <td>{rating.message}</td>
              </tr>
            ))}
            {ratings.length === 0 && (
              <tr>
                <td colSpan="11" className="text-center">
                  No ratings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatingsList;
