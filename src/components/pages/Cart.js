import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../../Styles/page/Cart.css';

const CartDisplay = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/items')
      .then((response) => {
        setCartData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  const handleRemoveItem = (itemId) => {
    Axios.delete(`http://localhost:5000/items/${itemId}`)
      .then(() => {
        setCartData((prevData) => prevData.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  const handlePlaceOrder = () => {
    const order = {
      items: cartData,
    };

    Axios.post('http://localhost:5000/placeOrder', order)
      .then((response) => {
        if (response.status === 200) {
          resetCart();
          alert('Order placed successfully!');
        } else {
          alert('Failed to place the order. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        alert('Failed to place the order. Please try again later.');
      });
  };

  const resetCart = () => {
    setCartData([]);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Car Model</th>
            <th>From Location</th>
            <th>To Location</th>
            <th>Rental Days</th>
            <th>Rental Months</th>
            <th>Total Rental Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.carDetails.image}
                  alt={`Car: ${item.carDetails.model}`}
                  className="cart-item-image"
                />
              </td>
              <td>{item.carDetails.model}</td>
              <td>{item.fromLocation}</td>
              <td>{item.toLocation}</td>
              <td>{item.rentalDays}</td>
              <td>{item.rentalMonths}</td>
              <td>${item.totalRentalPrice}</td>
              <td>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="btn btn-danger btn-sm cart-remove-button"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePlaceOrder} className="btn btn-primary cart-order-button">
        Order It
      </button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default CartDisplay;
