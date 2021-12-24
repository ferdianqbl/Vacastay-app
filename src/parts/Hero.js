import React from 'react';
import NumberFormat from 'react-number-format';

import ImgHeroMain from '../assets/images/landing-page-hero/hero-main.png';
// import ImgHero from '../assets/images/landing-page-hero/hero.png';
// import FrameHero from '../assets/images/landing-page-hero/hero-frame.png';
import IcCities from '../assets/images/icons/ic_cities.svg';
import IcTraveler from '../assets/images/icons/ic_traveler.svg';
import IcTreasure from '../assets/images/icons/ic_treasure.svg';

import Button from 'components/Button/Button';

function Hero(props) {

  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 100,
      behavior: "smooth"
    });
  }

  return (
    <section className="hero" id='hero'>
      <div className="container">
        <div className="row align-items-center hero-container">
          <div className="col-lg-6 pe-5">
            <h1 className="hero-heading mb-3">
              Forget Busy Work, <br />
              <span>Start</span> Next <span>Vacation</span>
            </h1>
            <p className="hero-text mb-4 pe-5 me-5">
              We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
            </p>
            <Button className="btn px-4 py-2" hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>
            <div className="row mt-5">
              <div className="col-sm-4">
                <img src={IcTraveler} alt={`${props.data.travelers} Travelers`} className="img-fluid mb-2" width="36" height="36" />
                <p className="text-icon">
                  <span>
                    <NumberFormat value={props.data.travelers} displayType={'text'} thousandSeparator={true} />
                  </span> travelers
                </p>
              </div>
              <div className="col-sm-4">
                <img src={IcTreasure} alt={`${props.data.treasures} Treasures`} className="img-fluid mb-2" width="36" height="36" />
                <p className="text-icon">
                  <span>
                    <NumberFormat value={props.data.treasures} displayType={'text'} thousandSeparator={true} />
                  </span> treasures
                </p>
              </div>
              <div className="col-sm-4">
                <img src={IcCities} alt={`${props.data.cities} Cities`} className="img-fluid mb-2" width="36" height="36" />
                <p className="text-icon">
                  <span>
                    <NumberFormat value={props.data.cities} displayType={'text'} thousandSeparator={true} />
                  </span> cities
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="img-hero">
              <img src={ImgHeroMain} alt="img-hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
