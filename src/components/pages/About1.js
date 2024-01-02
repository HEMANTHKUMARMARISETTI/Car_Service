import React, { useEffect, useState } from 'react';
import '../../Styles/page/about.css';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Delay the fading effect for a smoother transition
    const delay = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={`about-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className={`about-content ${fadeIn ? 'fade-in' : ''}`}>
        <h1 className='head2'><span>// </span>About Us<span> //</span></h1>
        <p className='para1'>
          <span>FastLane</span>, your premier choice for car rental and car care services, is driven by a passion for simplicity and excellence. Our diverse fleet offers the perfect ride for every occasion, and our skilled technicians ensure your vehicle remains in optimal condition. Whether you're hitting the road or maintaining your car, FastLane is your trusted partner from start to finish. Experience the FastLane advantage today and let us keep you moving smoothly.
        <br></br>Our story began with a simple idea: to make transportation effortless and enjoyable for everyone. Whether you're looking to rent a car for your next adventure or seeking top-notch car care services to keep your vehicle running smoothly, FastLane has you covered.
        </p>
      </div>
      <div className={`about-image ${fadeIn ? 'fade-in' : ''}`}>
        <img src={require('../../assets/img/about/cyberpunk-car-urban-scenery.jpg')} alt="About Us" className='image-about'/>
      </div>
    </div>
  );
};

export default About;
