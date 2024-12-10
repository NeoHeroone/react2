import React from 'react';
import './info.css'
import arrow from '../../assets/arrow.svg'
import oval from '../../assets/oval.svg'

const Info = () => {
  return (
    <>
      <div className="info-content">
        <div className="container">
          <h2 className="info-title title">
            It's easy as 1, 2, 3
          </h2>
          <p className="info-desc">
            Clerksy can help use your unique business needs. Here's how:
          </p>
          <div className="info-cards">
            <div className="info-card">
              <p className="info-card_title">
                Fill out a form and tell us what you're looking for:
              </p>
              <span className="info-p title">5 minutes</span>
            </div>
            <img src={arrow} alt="" className="arrow arrow1" />
            <div className="info-card">
              <p className="info-card_title">
                Time it will take a Clerksy rep to follow up:
              </p>
              <span className="info-p title">24 hours</span>
            </div>
            <img src={arrow} alt="" className="arrow arrow2" />
            <div className="info-card info-card3">
              <p className="info-card_title">
                Take advantage of our monthly plans starting at:
              </p>
              <span className="info-p title">$969 USD</span>
            </div>
          </div>
          <button className="info-btn hero-btn">
            Book Free Discovery Call
          </button>
          <div className="pos-div">
            <img src={oval} alt="" className='position' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;