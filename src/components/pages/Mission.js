import React from 'react';
import '../../Styles/page/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faShieldAlt,
  faBalanceScale,
  faTree,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';

function MissionAndValues() {
  return (
    <div className="mission-and-values">
      <h2>Our Mission</h2>
      <p>
        At XYZ Car Rentals, our mission is to provide top-quality rental vehicles
        and exceptional service to our customers, ensuring a safe and memorable
        journey for every traveler.
      </p>

      <h2>Our Values</h2>
      <div className="card-container">
        <div className="card">
          <FontAwesomeIcon icon={faThumbsUp} />
          <h3>Customer Satisfaction</h3>
          <p>
            We prioritize our customers' needs and strive to exceed their expectations.
          </p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faShieldAlt} />
          <h3>Safety First</h3>
          <p>
            We are committed to maintaining a fleet of well-maintained and safe vehicles.
          </p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faBalanceScale} />
          <h3>Integrity</h3>
          <p>
            We conduct our business with honesty, transparency, and ethical practices.
          </p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faTree} />
          <h3>Environmental Responsibility</h3>
          <p>
            We are dedicated to minimizing our environmental impact through sustainable practices.
          </p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faHandsHelping} />
          <h3>Community Engagement</h3>
          <p>
            We actively engage with and support the communities in which we operate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionAndValues;