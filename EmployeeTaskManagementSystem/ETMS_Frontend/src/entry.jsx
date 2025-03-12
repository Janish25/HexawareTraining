import { Link } from "react-router-dom";
import './entry.css'

const Entry = () => {
  return (
    <div className="entry-container">
      <div className="entry-image">
        <img src="/images/task-management.jpg" alt="Task Management" />
      </div>
      <div className="entry-content">
        <h1>Employee Task Management System</h1>
        <div className="button-group">
          <Link to="/admin-login">
            <button className="btn admin-btn">Admin Login</button>
          </Link>
          <Link to="/employee-login">
            <button className="btn employee-btn">Employee Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Entry;
