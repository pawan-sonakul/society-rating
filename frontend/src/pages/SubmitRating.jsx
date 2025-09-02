import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addRating } from '../api/apiHandler';

const SubmitRating = () => {
  const [anonymous, setAnonymous] = useState(false);

  const [data, setData] = useState({
    name: '',
    management: '',
    cleanliness: '',
    security: '',
    amenities: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      residentName: anonymous ? "Anonymous" : data.name,
      managementRating: Number(data.management),
      amenitiesRating: Number(data.amenities),
      securityRating: Number(data.security),
      cleanlinessRating: Number(data.cleanliness),
      message: (data.message),
      anonymous: anonymous
    };

    try {
      await addRating(requestData);
      toast.success("Rating Submitted Successfully!");

      setData({
        name: '',
        management: '',
        cleanliness: '',
        security: '',
        amenities: '',
        message: ''
      });
      setAnonymous(false);

      navigate("/submit");

    } catch (error) {
      toast.error(`Failed to submit rating`);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Rate Your Society</h2>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onChangeHandler}
                value={data.name}
                required={!anonymous}
                disabled={anonymous}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="anonymousCheck"
                checked={anonymous}
                onChange={() => setAnonymous(!anonymous)}
              />
              <label className="form-check-label" htmlFor="anonymousCheck">
                Submit as Anonymous
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="management" className="form-label">Management Rating (0-5)</label>
              <input
                type="number"
                className="form-control"
                id="management"
                name="management"
                placeholder="0"
                value={data.management}
                onChange={onChangeHandler}
                required
                min="0"
                max="5"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amenities" className="form-label">Amenities Rating (0-5)</label>
              <input
                type="number"
                className="form-control"
                id="amenities"
                name="amenities"
                placeholder="0"
                value={data.amenities}
                onChange={onChangeHandler}
                required
                min="0"
                max="5"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="security" className="form-label">Security Rating (0-5)</label>
              <input
                type="number"
                className="form-control"
                id="security"
                name="security"
                placeholder="0"
                value={data.security}
                onChange={onChangeHandler}
                required
                min="0"
                max="5"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cleanliness" className="form-label">Cleanliness Rating (0-5)</label>
              <input
                type="number"
                className="form-control"
                id="cleanliness"
                name="cleanliness"
                placeholder="0"
                value={data.cleanliness}
                onChange={onChangeHandler}
                required
                min="0"
                max="5"
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Comment</label>
              <textarea class="form-control" id="message" rows="5" className="form-control"
                name="message"
                placeholder="Add comment"
                value={data.message}
                onChange={onChangeHandler} required></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit Rating
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitRating;
