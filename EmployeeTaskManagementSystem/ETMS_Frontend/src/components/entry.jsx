import { Link } from "react-router-dom";
import "./Entry.css"; // Create a CSS file for styling

const Entry = () => {
  return (
    <div className="container">
      <div className="image">
        <img src="../public/task-management-process.png" alt="Task Management" />
      </div>
      <div className="Heading">
        <h1>Employee Task Management System</h1>
        
        <div className="btn btn-primary">
          
          <Link to="/login">
            <button className="btn employee-btn">Login !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Entry;
