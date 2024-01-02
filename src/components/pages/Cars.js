import React, { useState, useEffect } from "react";
import useCarsStore from "../pages/CarStore";
import CartDisplay from "../pages/Cart";
import '../../Styles/page/car.css';
import { Carousel } from 'react-responsive-carousel';
import Axios from 'axios'; // Import Axios
import ReviewSlider from './review';

const Cars = () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [cart, setCart] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [rentalDays, setRentalDays] = useState('');
  const [rentalMonths, setRentalMonths] = useState('');
  const [showInputFields, setShowInputFields] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [editingItemIndex, setEditingItemIndex] = useState(-1);
  const [editedItem, setEditedItem] = useState({});

  useEffect(() => {
    Axios.get('http://localhost:4000/brands')
      .then((response) => {
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const postCartData = async (data) => {
    try {
      const response = await Axios.post('http://localhost:5000/items', data);
      console.log('Data successfully posted:', response.data);
      // Optionally, you can reset the form or take other actions upon successful submission.
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleConfirmAddToCart = () => {
    if (!toLocation || !fromLocation) {
      alert('Please fill in all required fields (From Location, To Location).');
      return;
    }

    if (!rentalDays && !rentalMonths) {
      alert('Please specify rental duration (either days or months).');
      return;
    }

    const dailyRentalPrice = selectedCar.dailyPrice || 0;
    const monthlyRentalPrice = selectedCar.monthlyPrice || 0;

    const totalRentalPrice =
      rentalDays * dailyRentalPrice + rentalMonths * monthlyRentalPrice;

    const cartItem = {
      carDetails: selectedCar, // Store car details
      fromLocation,
      toLocation,
      rentalDays: parseInt(rentalDays),
      rentalMonths: parseInt(rentalMonths),
      totalRentalPrice,
    };

    // Send the cart item data to the API endpoint
    postCartData(cartItem);

    // Clear input fields after adding to cart
    setToLocation('');
    setFromLocation('');
    setRentalDays('');
    setRentalMonths('');
    setShowInputFields(false);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart); // Update the cart state
  };

  const handleSaveEdit = () => {
    setEditingItemIndex(-1);
    setEditedItem({});
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFromLocationChange = (event) => {
    setFromLocation(event.target.value);
  };

  const handleToLocationChange = (event) => {
    setToLocation(event.target.value);
  };

  const handleRentalDaysChange = (event) => {
    setRentalDays(event.target.value);
  };

  const handleRentalMonthsChange = (event) => {
    setRentalMonths(event.target.value);
  };

  const handleAddToCartClick = (car) => {
    setShowInputFields(true);
    setSelectedCar(car);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCancelAddToCart = () => {
    setShowInputFields(false);
    setSelectedCar(null);
    setToLocation('');
    setFromLocation('');
    setRentalDays('');
    setRentalMonths('');
  };



  return (

    <div>
    

      <Carousel autoPlay infiniteLoop interval={1500} showArrows={true} showStatus={false} showIndicators={false} showThumbs={false}>
        <div className="slide">
          <img src={require('../../assets/img/carousal/car 3.jpg')} alt="Car 1"/>
          <div className="carousel-caption">
            <h2>Car 1</h2>
            <p>Description for Car 1</p>
          </div>
        </div>
        <div className="slide">
          <img src={require('../../assets/img/carousal/car1.jpg')} alt="Car 1"  />
          <div className="carousel-caption">
            <h2>Car 1</h2>
            <p>Description for Car 1</p>
          </div>
        </div>
        <div className="slide">
          <img src={require('../../assets/img/carousal/car2.jpg')} alt="Car 1"  />
          <div className="carousel-caption">
            <h2>Car 1</h2>
            <p>Description for Car 1</p>
          </div>
        </div>
        <div className="slide">
          <img src={require('../../assets/img/carousal/car4.jpg')} alt="Car 2" />
          <div className="carousel-caption">
            <h2>Car 2</h2>
            <p>Description for Car 2</p>
          </div>
        </div>
      </Carousel>
      {/* <div className="background-text">
        FAST LANE
      </div> */}
      <div className="container">
        <div className="filters">
          {/* Brand Dropdown */}
          <label htmlFor="brandSelect">Select Brand: </label>
          <select
            id="brandSelect"
            onChange={handleBrandChange}
            value={selectedBrand || ""}
          >
            <option value="">All Cars</option>
            {jsonData.map((brand, brandIndex) => (
              <option key={brandIndex} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>

          {/* Price Filter */}
          <label htmlFor="priceFilter">Price Filter: </label>
          <input
            type="number"
            id="priceFilter"
            placeholder="Enter max price"
            value={priceFilter}
            onChange={handlePriceFilterChange}
          />

          {/* Search Bar */}
          <input
            type="text"
            id="searchQuery"
            placeholder="Search by model"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        {jsonData.map((brand, brandIndex) => (
          <div key={brandIndex}>
            {/* Display cars based on the selected brand, price filter, and search query */}
            {(selectedBrand === null || selectedBrand === brand.name) &&
              (priceFilter === "" || priceFilter >= brand.cars[0].price) && (
                <>
                  <h2 className="brand-name">{brand.name}</h2>
                  <div className="image-card-container">
                    {brand.cars.map((car, carIndex) => (
                      (priceFilter === "" || car.price <= priceFilter) &&
                      (searchQuery === "" || car.model.toLowerCase().includes(searchQuery.toLowerCase())) && (
                        <div key={carIndex} className="image-card">
                          {/* Car details */}
                          <h3>{car.model}</h3>
                          <p>Year: {car.year}</p>
                          <p>Color: {car.color}</p>
                          <div>
                            <p>Daily Price: ${car.dailyPrice}</p>
                            <p>Monthly Price: ${car.monthlyPrice}</p>
                          </div>
                          <img src={car.image} alt={`${brand.name} - ${car.model}`} />
                          {/* Add to Cart Button */}
                          {showInputFields && selectedCar === car ? (
                            <>
                              {/* Input fields for adding to cart */}
                              <div>
                                <label htmlFor={`fromLocation${carIndex}`}>From Location:</label>
                                <input
                                  type="text"
                                  id={`fromLocation${carIndex}`}
                                  value={fromLocation}
                                  onChange={handleFromLocationChange}
                                />
                              </div>
                              <div>
                                <label htmlFor={`toLocation${carIndex}`}>To Location:</label>
                                <input
                                  type="text"
                                  id={`toLocation${carIndex}`}
                                  value={toLocation}
                                  onChange={handleToLocationChange}
                                />
                              </div>
                              <div>
                                <label htmlFor={`rentalDays${carIndex}`}>Rental Days:</label>
                                <input
                                  type="number"
                                  id={`rentalDays${carIndex}`}
                                  value={rentalDays}
                                  onChange={handleRentalDaysChange}
                                />
                              </div>
                              <div>
                                <label htmlFor={`rentalMonths${carIndex}`}>Rental Months:</label>
                                <input
                                  type="number"
                                  id={`rentalMonths${carIndex}`}
                                  value={rentalMonths}
                                  onChange={handleRentalMonthsChange}
                                />
                              </div>
                              {/* ... Other input fields ... */}
                              <button onClick={handleConfirmAddToCart} className="add-to-cart-button">Add to Cart</button>
                              <button onClick={handleCancelAddToCart} className="cancel-add-to-cart-button">Cancel</button>
                            </>
                          ) : (
                            <button onClick={() => handleAddToCartClick(car)} className="add-to-cart-button">
                              Add to Cart
                            </button>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </>
              )}
          </div>
        ))}

        <div>
          {/* Display the shopping cart using the ShoppingCart component */}
          <CartDisplay /><br></br>
          <h1 className='trend'>CUSTOMER <span>REVIEWS</span></h1>
          <ReviewSlider  />
        </div>
      </div>
    </div>
  );


}
export default Cars;
