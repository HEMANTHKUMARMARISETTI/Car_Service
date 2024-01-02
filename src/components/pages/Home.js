import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../Styles/page/Home.css'
import About1 from "./About1";
import CarSlider from "./Slider";
import BrandImages from "./Logo";
import Services1 from "./Serve1";
import Contact1 from "./Contact1";

const Home = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className='hero-cell' style={{ width: '50%' }}>
              <section className='hero'>
                <div className='hero-content'>
                  <h1>Need A Ride ?</h1>
                  <h2>Choose Your<br></br>Comfort.</h2>
                  <p>Best Car Rental Service with Guaranteed Best Quality</p><br></br>
                  <button class="contact-button">Contact Now</button>

                </div>
              </section>
            </td>
            <td className='carousel-cell'>
              <div className='carousel-container'>
                <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                  <div>
                    <img src={require('../../assets/img/3-2-bmw-png-image.png')} alt="BMW 1" />
                  </div>
                  <div>
                    <img src={require('../../assets/img/personal-luxury-car-mid-size-car-sports-car-compact-car-car-c3c0c5896c8e84b2d179553274c98490.png')} alt="BMW 1" className="car2" />
                  </div>
                  <div>
                    <img src={require('../../assets/img/lexus-ls-car-lexus-gs-lexus-es-car-26fe5a2bf2cad2c7eed420220bafe26e.png')} alt="BMW 3" className="car3"/>
                  </div>
                  <div>
                    <img src={require('../../assets/img/2018-toyota-land-cruiser-toyota-land-cruiser-prado-car-sport-utility-vehicle-prado-2a93870051cf6d6a11148009bbc86e6a.png')} alt="BMW 3" className="car2"/>
                  </div>
                </Carousel>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <br></br>
      <h1 className='trend'>Our <span>Partners</span></h1>
      <br></br>
      <BrandImages></BrandImages>
      <br></br>
      <hr></hr>
      <br></br>
      <h1 className='trend'>Our Trending <span>Tornados</span></h1>
      <CarSlider apiUrl="http://localhost:4000/trending" />
      <br></br>
      <h1 className="trend">Upcoming <span>Beasts</span> </h1>
      <CarSlider apiUrl="http://localhost:4000/upcoming" />
      <br></br>
      <About1></About1>
      <br></br>
      <h1 className="trend">Our Services</h1>
      <Services1></Services1>
      <br></br>
      <Contact1></Contact1>
    </div>
  );
};

export default Home;
