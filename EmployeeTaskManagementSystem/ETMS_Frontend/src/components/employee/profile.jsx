import axios from "axios";
import { useEffect, useState } from "react";
import "./profile.css"; 


const EmpProfile = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const gettingProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/employee/profile", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        });
        const data = response.data;
        setName(data.name);
        setCity(data.city);
        setSalary(data.salary);
        setJobTitle(data.jobTitle);
        setProfilePic(data.profilePic);
      } catch (error) {
        console.log(error);
      }
    };
    gettingProfile();
  }, []);


  return (
    <div className="profile-card">
      <div className="card-header">
        <h2>Employee Profile</h2>
      </div>
      <div className="card-body ">
        <img src={ "https://cdn-icons-png.flaticon.com/512/9094/9094119.png"} alt="Profile" className="pic" />
        <form className="profile-form">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <label>Salary:</label>
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
          <label>Job Title:</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </form>
       
      </div>
    </div>
  );
};

export default EmpProfile;
