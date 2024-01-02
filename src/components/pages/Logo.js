import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/page/brand.css'

class BrandImages extends Component {
    constructor() {
      super();
      this.state = {
        images: [],
        loading: true,
      };
    }
  
    componentDidMount() {
      // Make a GET request to fetch the images
      axios.get('http://localhost:4000/logo')
        .then((response) => {
          // Set the fetched images in the state
          this.setState({
            images: response.data,
            loading: false,
          });
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
          this.setState({ loading: false });
        });
    }
  
    render() {
      const { images, loading } = this.state;
  
      return (
        <div>
          
          {loading ? (
            <p className="loading-text">Loading...</p>
          ) : (
            <div className="brand-images-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  alt={`Brand ${index}`}
                  className="brand-image"
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  }
  
  export default BrandImages;