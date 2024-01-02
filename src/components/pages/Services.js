import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faMapMarkedAlt,
  faGasPump,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import '../../Styles/page/Serv.css'
import Country from './Country';


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

const Services = () => {
  return (
    <div>
    <div class="image-container">
        <img src={require('../../assets/img/team/2023-Porsche-911-GT3-R-Rennsport-004-1080w.jpg')} alt=""></img>
        <div class="about-name">SERVICES</div>
       </div>
       <br></br>
       <p className='para'>
Our car rental service is your go-to solution for convenient and hassle-free transportation. Whether you're planning a business trip, a family vacation, or simply need a reliable vehicle for daily commuting, we've got you covered. With a diverse fleet of well-maintained cars, including compact, midsize, SUVs, and luxury options, you can find the perfect vehicle to suit your needs and preferences. Our easy booking process and competitive rates make renting a car with us a breeze. Plus, we prioritize your safety and satisfaction, ensuring that each vehicle is thoroughly inspected and sanitized before every rental. Experience the freedom of the open road with our car rental service, where quality and customer service are our top priorities.</p>
    <div className="service-page">
      <h1 className='trend'>Our Services</h1>
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
    <br></br>
    <h1 className='trend'>Car Rental <span>Countries</span></h1>
    <Country></Country>
    
    </div>
  );
};

export default Services;
