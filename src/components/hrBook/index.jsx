import React from 'react';
import './styles.css'
import hr from "../../assets/hrcontent.png"

const HrBook = () => {
  return (
    <>
      <div className="hr-content">
        <div className="container">
          <div className="hr-text_content">
            <h2 className='title'>
              Not just another HR resource.
            </h2>
            <p>
              Simple. Entertaining. Informative.
            </p>
            <button className='hero-btn'>
              Download E-book
            </button>
          </div>
          <img src={hr} alt="" />
        </div>
      </div>
    </>
  );
}

export default HrBook;
