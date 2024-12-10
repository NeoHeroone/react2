import './styles.css'
import fit1 from '../../assets/fit.png'
import fitCard1 from '../../assets/fitProtect.svg'
import fitCard2 from '../../assets/fitStar.svg'
import fitCard3 from '../../assets/fitSearch.svg'

const Fit = () => {
  return (
    <>
      <div className="fit-content">
        <div className="container">
          <div className="fit-content-box1">
            <div className="fit-box1_textContent">
              <h3 className="fit-box1_title title">
                How the scenes fit together
              </h3>
              <p className="fit-box1_desc">
                Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.
              </p>
            </div>
            <img src={fit1} alt="" />
          </div>
          <div className="fit-content-box2">
            <h2 className="fit-box2_title title">
              Consider everyone's best interest
            </h2>
            <p className="fit-box2_desc">
              HR is for everyone. Clerksy can help you.
            </p>
            <div className="fit-box2_cards">
              <div className="fit-box2_card">
                <img src={fitCard1} alt="" />
                <h3 className="fit-card_title title">
                  Protect Your Company
                </h3>
                <ul>
                  <li>
                    <a href="#">Compliance Audits & Training</a>
                  </li>
                  <li>
                    <a href="#">Employee Data Storage</a>
                  </li>
                  <li>
                    <a href="#">Policy Drafting</a>
                  </li>
                </ul>
              </div>
              <div className="fit-box2_card">
                <img src={fitCard2} alt="" />
                <h3 className="fit-card_title title">
                  Set Your Employees Up For Success
                </h3>
                <ul>
                  <li>
                    <a href="#">Learning & Development</a>
                  </li>
                  <li>
                    <a href="#">Employee Relations</a>
                  </li>
                  <li>
                    <a href="#">Benefit Management</a>
                  </li>
                  <li>
                    <a href="#">Employee Performance</a>
                  </li>
                </ul>
              </div>
              <div className="fit-box2_card">
                <img src={fitCard3} alt="" />
                <h3 className="fit-card_title title">
                  Know Your Industry's Legal Landscape
                </h3>
                <ul>
                  <li>
                    <a href="#">Work Place Investigations</a>
                  </li>
                  <li>
                    <a href="#">Employee Mediations</a>
                  </li>
                  <li>
                    <a href="#">Performance Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fit;
