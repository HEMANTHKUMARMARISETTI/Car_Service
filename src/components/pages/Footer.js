import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../Styles/page/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  Phone: (123) 456-7890
                </li>
                <li>
                  Email: info@carservice.com
                </li>
                <li>
                  Address: 123 Main St, City, State
                </li>
              </ul>
            </div>
    
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">
                  Facebook
                </a>
                <a href="#">
                  Twitter
                </a>
                <a href="#">
                  Instagram
                </a>
              </div>
            </div>
    
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
    
          <div className="copyright">
            &copy; {new Date().getFullYear()} Car Service. All rights reserved.@Designed By Hemanth
          </div>
        </footer>
      );
    };
    

export default Footer;
