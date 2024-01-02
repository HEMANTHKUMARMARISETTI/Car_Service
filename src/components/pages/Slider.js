import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import '../../Styles/page/slider.css'; // Your custom CSS

const CarSlider = ({ apiUrl }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch car data using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, // Change to 3 to slide 3 items at a time
    nextArrow: <SampleNextArrow />, // Custom next arrow component
    prevArrow: <SamplePrevArrow />, // Custom prev arrow component
  };

  // Custom next arrow component
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        Next
      </div>
    );
  }

  // Custom prev arrow component
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        Prev
      </div>
    );
  }

  return (
    <div className="car-slider">
      <Slider {...settings}>
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <img src={car.image} alt={car.name} className="car-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
