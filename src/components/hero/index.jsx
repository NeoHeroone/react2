import "./index.css"
import Logo from '../../assets/logo.svg'
import HeroRight from '../../assets/hero-right.png'

function Hero() {
  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="" />
        <ul>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">844-332-6440</a>
          </li>
          <li>
            <button className="hero-btn">Get Started</button>
          </li>
        </ul>
      </div>
      <div className="container hero-content">
        <div className="hero-text_content">
          <h1 className="hero-title">
            Running the show has never been so easy.
          </h1>
          <p className="hero-desc">
            Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.
          </p>
        </div>
        <img src={HeroRight} alt="" className="hero-content_img" />
      </div>
    </div>
  );
}

export default Hero;