import Hr from '../../assets/hr.png'
import Play from '../../assets/playBro.png'
import Stripe from "../../assets/stripe.svg"
import Google from "../../assets/google.svg"
import Notion from "../../assets/notion.svg"
import Gusto from "../../assets/gusto.svg"
import Aircall from "../../assets//aircall.svg"
import './about.css'
const Index = () => {
  return (
    <>
      <div className="about-content">
        <div className="container">
          <div className="about-box_content">
            <div className="about-content_box">
              <img src={Hr} alt="" />
              <div className="about-text_box">
                <h2 className="about-title title">
                  Put the human back in HR.
                </h2>
                <p className="about-desc">
                  Your employees are the real stars. Show the love and help them perform!
                </p>
              </div>
            </div>
            <div className="about-content_box">
              <div className="about-text_box">
                <h2 className="about-title title">
                  You don’t have to play all the parts.
                </h2>
                <p className="about-desc">
                  Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.
                </p>
              </div>
              <img src={Play} alt="" />
            </div>
          </div>
          <div className="carousel">
            <h2 className="about-bottom_title title">
              We partner with the best
            </h2>
            <div className="carousel-track">
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Notion} alt="" />
              <img src={Gusto} alt="" />
              <img src={Aircall} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;