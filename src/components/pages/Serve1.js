import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faMapMarkedAlt,
  faGasPump,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import '../../Styles/page/Serv.css'

const services = [
  {
    icon: faCar,
    title: 'Variety of Cars',
    description: 'Choose from a wide range of car models.',
  },
  {
    icon: faMapMarkedAlt,
    title: 'Locations Everywhere',
    description: 'Convenient pick-up and drop-off locations.',
  },
  {
    icon: faGasPump,
    title: 'Fuel Efficiency',
    description: 'Fuel-efficient cars to save you money.',
  },
  {
    icon: faUsers,
    title: 'Excellent Support',
    description: 'Friendly customer support available 24/7.',
  },
];

const Services1 = () => {
  return (
    <div className="service-page">
      
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services1;
