import Inform from '../../assets/informs.svg'
import Protect from '../../assets/protect.svg'
import Manage from '../../assets/manage.svg'
import Healthy from '../../assets/healthy.svg'
import './production.css'

const Production = () => {
  return (
    <div className="production-content">
      <div className="container">
        <h2 className="production-title title">
          HR Production of the Highest Quality
        </h2>
        <div className="production-content_box">
          <div className="production-box">
            <img src={Inform} alt="" />
            <p className="production-box_desc">
              Educates & Informs
              Employee Expectations
            </p>
          </div>
          <div className="production-box">
            <img src={Protect} alt="" />
            <p className="production-box_desc">
              Protects Your Business
              Just in Case
            </p>
          </div>
          <div className="production-box">
            <img src={Manage} alt="" />
            <p className="production-box_desc">
              Manages & Stores
              Important Documents
            </p>
          </div>
          <div className="production-box">
            <img src={Healthy} alt="" />
            <p className="production-box_desc">
              Create a Healthy
              Work Environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Production;
