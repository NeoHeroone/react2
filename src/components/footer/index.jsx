import React from 'react';
import './style.css'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import Logo from '../../assets/footerLogo.svg'

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="container">
          <div className="footer-card">
            <img src={Logo} alt="" />
            <h3 className='title'>
              A people company
            </h3>
            <div className="icons-card">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="hr"></div>
          <div className="footer-card">
            <p>
              © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.
            </p>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
