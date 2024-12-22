import React, { useState } from 'react';
import NavbarComponent from './NavbarComponents'; // Import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';

const CoursePage: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [reviews, setReviews] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  // Update stars for rating selection
  const updateRatingStars = (value: number) => {
    setSelectedRating(value);
  };

  // Update average stars display
  const updateAverageStars = (average: number) => {
    return Array.from({ length: 5 }, (_, i) => i < average ? '⭐' : '☆').join('');
  };

  const handleReviewSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !comment || selectedRating === 0) {
      alert('Please complete all fields and select a rating.');
      return;
    }

    const newReview = { name, rating: selectedRating, comment };
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);

    // Calculate average rating
    const average = Math.round(newReviews.reduce((acc, curr) => acc + curr.rating, 0) / newReviews.length);
    updateAverageStars(average);

    // Clear form after submission
    setName('');
    setComment('');
    setSelectedRating(0);
  };

  return (
    <>
      {/* Navbar Component */}
      <NavbarComponent />

      <div className="container mt-5">
        {/* Course Header */}
        <div className="text-center">
          <h1>Course 1</h1>
          <div className="stars" id="starDisplay">
            {/* Average star rating display */}
            {updateAverageStars(
              Math.round(reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length)
            )}
          </div>
          <img src="course1.jpg" alt="Course 1 Image" className="img-fluid my-3" style={{ maxHeight: '300px' }} />
        </div>

        {/* Introduction */}
        <div className="mt-4">
          <h3>About the Course</h3>
          <p>
            Course 1 introduces the fundamental concepts of programming, including variables, data types, control structures, and basic algorithms. This course is perfect for beginners who want to start their journey into the world of coding.
          </p>
        </div>

        {/* Timetable */}
        <div className="mt-4">
          <h3>Timetable</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Room A1</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>2:00 PM - 4:00 PM</td>
                <td>Room A1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Review Section */}
        <div className="mt-4">
          <h3>Leave a Review</h3>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Rating (1-5)</label>
              <div id="ratingStars" className="stars">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    data-value={value}
                    onClick={() => updateRatingStars(value)}
                    style={{ cursor: 'pointer' }}
                  >
                    {value <= selectedRating ? '⭐' : '☆'}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-control"
                rows={4}
                placeholder="Write your comment here..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
          </form>
        </div>

        {/* Display Comments */}
        <div className="mt-5">
          <h3>Comments</h3>
          <ul id="commentList" className="list-group">
            {reviews.length === 0 ? (
              <li className="list-group-item">No comments yet. Be the first to leave a review!</li>
            ) : (
              reviews.map((review, index) => (
                <li key={index} className="list-group-item">
                  <strong>{review.name}</strong>
                  <div className="stars">
                    {'⭐'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p>{review.comment}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
