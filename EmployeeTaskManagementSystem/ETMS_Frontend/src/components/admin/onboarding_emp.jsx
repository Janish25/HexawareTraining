import { useState } from "react"
import AdminNavbar from "./navbar"
import axios from "axios";


function EmployeeOnboarding(){

    const [name,setName] = useState(undefined);
    const [jobTitle,setjobTitle] = useState(undefined);
    const [city,setCity] = useState(undefined);
    const [username,setUsername] = useState(undefined);
    const [password,setPassword] = useState(undefined);
    const [salary,setSalary] = useState(undefined);
    const [msg,setMsg] = useState(undefined)
    
    const processForm = async (e)=>{
        e.preventDefault();
        let url = "http://localhost:5001/api/employee/add"
        let token = localStorage.getItem('token')
        let header = {
            'Authorization' : 'Bearer ' + token
        }
        try {
            const response = await axios.post(url, {
                'name': name,
                'jobTitle': jobTitle,
                'city': city,
                'salary': salary,
                'username': username,
                'password': password
            }, 
            {headers: header}
        );
            setMsg('Employee Onboarded Successfully!!!!')
        }
        catch (error) {
            setMsg('Error in Onboarding')
            console.error(error)
        }

    }
    return(
        <>
            <div className="row">  
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row mt-4">  
                <div className="col-sm-2"> </div>
                <div className="col-md-8"> 
                    <div className="card">
                        <div className="card-header " style={{ backgroundColor: "#6A0572", color : "white" }}>
                            Employee Onboarding - Add Details 
                        </div>
                        <div className="card-body">

                            <form className="row g-3" onSubmit={processForm}>
                                {msg ? <div className="col-md-12">
                                    <div className="alert alert-primary">
                                        {msg}
                                    </div>    
                                </div> : ""}

                                <div className="col-md-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control"
                                        onChange={($event) => setName($event.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label  className="form-label">City</label>
                                    <input type="text" className="form-control" 
                                        onChange={($event)=>setCity($event.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label  className="form-label">Salary</label>
                                    <input type="text" className="form-control" 
                                        onChange={($event)=>setSalary($event.target.value)} />
                                </div>
                                <div className="col-6">
                                    <label for="inputAddress" className="form-label">Select Job Title</label>
                                    <select className="form-control" 
                                        onChange={($event)=>setjobTitle($event.target.value)}>
                                        <option value="">----select job title----</option>
                                        <option value="Software Developer">Software Dev</option>
                                        <option value="Software Tester">Software tester</option>
                                        <option value= "Product Owner">Product Owner</option>
                                    </select>
                                </div>
                                <div className="col-lg-12">
                                    <label for="inputCity" className="form-label">Profile Pic</label>
                                    <input type="file" className="form-control" id="inputCity" />
                                    <br />
                                    <button className="btn btn-secondary">Upload</button>
                                </div>
                                <div className="col-lg-12">
                                    <label for="inputCity" className="form-label">Upload updated CV</label>
                                    <input type="file" className="form-control" id="inputCity" />
                                    <br />
                                    <button className="btn btn-secondary">Upload</button>
                                </div>
                                 <div className="col-md-6">
                                 <label for="inputZip" className="form-label">Username</label>
                                 <input type="text" className="form-control" 
                                    onChange={($event)=>setUsername($event.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputZip" className="form-label">Password</label>
                                    <input type="text" className="form-control" 
                                    onChange={($event)=>setPassword($event.target.value)} />
                                </div>
                                 
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Employee Onboarding</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"> </div>
            </div>
        </>
    )
}

export default EmployeeOnboarding
