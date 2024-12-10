import emp from '../../assets/employee.png'
import './style.css'

const Employee = () => {
  return (
    <>
      <div className="employee-content">
        <div className="container">
          <h2 className="employee-title title">
            Employees come in all shapes and sizes. Find the right fit.
          </h2>
          <p className="employee-desc">
            Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts and make sure you are compliant with work and safety boards.
          </p>
          <img src={emp} alt="" />
        </div>
      </div>
    </>
  );
}

export default Employee;
