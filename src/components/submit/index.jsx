import React from 'react';
import './styles.css'

const Submit = () => {
  return (
    <>
      <div className="submit-content">
        <div className="container">
          <div className="submit-textContent">
            <h2 className="title">
              Stay up to date!
            </h2>
            <p>
              Sign up for the latest Clerksy news.
            </p>
          </div>
          <div className="submit-inputContent">
            <form>
              <input type="text" />
              <button className="hero-btn">
                Sign Up
              </button>
            </form>
            <p>
              By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submit;
