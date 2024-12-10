import React from 'react';
import './styles.css'
import str1 from '../../assets/started1.svg'
import str2 from '../../assets/started2.png'

const Started = () => {
  return (
    <>
      <div className="started-content">
        <div className="container">
          <h2 className="title">Get Started With Clerksy</h2>
          <p>
            Make sure your business puts people first.
          </p>
          <button className='hero-btn'>
            Book a Free Discovery Call
          </button>
          <div className="position-boxstr">
            <img src={str1} alt="" className="str1 strImg" />
            <img src={str2} alt="" className="str2 strImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Started;
