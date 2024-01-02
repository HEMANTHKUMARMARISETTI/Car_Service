import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import '../../Styles/page/slider.css'; // Your custom CSS
import '../../Styles/page/review.css';

const apiUrl = "http://localhost:4000/reviews";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    customerName: '',
    review: '',
    rating: 0,
  });

  useEffect(() => {
    // Fetch reviews data using GET request
    axios
      .get(apiUrl)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        Next
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        Prev
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, // Change to 3 to slide 3 items at a time
    nextArrow: <SampleNextArrow />, // Custom next arrow component
    prevArrow: <SamplePrevArrow />, // Custom prev arrow component
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  }

  function handleAddReview() {
    // Ensure that the rating is limited to a maximum of 5
    const limitedRating = Math.min(newReview.rating, 5);
    const limitedReview = { ...newReview, rating: limitedRating };

    // Send a POST request to add a new review
    axios
      .post(apiUrl, limitedReview)
      .then((response) => {
        // Assuming the server responds with the newly added review
        setReviews([...reviews, response.data]);
        setNewReview({
          customerName: '',
          review: '',
          rating: 0,
        });
      })
      .catch((error) => {
        console.error('Error adding review:', error);
      });
  }

  return (
    <div className="review-slider">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <img src={review.customerImage} alt={`Customer ${review.customerName}`} className="customer-image" />
            <h3>{review.customerName}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating} out of 5</p>
          </div>
        ))}
      </Slider>

      {/* Add a form to submit new reviews */}
      <div className="add-review-form">
        <h2>Add a Review</h2>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={newReview.customerName}
          onChange={handleInputChange}
        />
        <textarea
          name="review"
          placeholder="Customer Review"
          value={newReview.review}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={newReview.rating}
          onChange={handleInputChange}
        />
        <button onClick={handleAddReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default ReviewSlider;
