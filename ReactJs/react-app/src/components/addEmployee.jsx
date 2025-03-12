import {useState } from "react";

const AddEmployee = () => {

    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [dob, setDob] = useState(null);
    let [nameErr, setNameErr] = useState(null);
    let [emailErr, setEmailErr] = useState(null);
    let [dobErr, setDobErr] = useState(null);

    const isValid = name && email && dob;
    return (
        <form action="">
            <div className="container">
            <div className="card">
                <div className="card-header">
                    Add Employee Details
                </div>
                <div className="card-body">
                    <div className="mt-4">
                        <label>Name</label>
                        <input className="form-control" type="text" 
                        onChange={$event => {
                            setName($event.target.value)
                            if($event.target.value == '')
                                setNameErr('Name is required')
                            else
                                setNameErr('')
                            }}/>
                        <span style={{'fontSize': 'small' , 'color' : 'red'}}> {nameErr}</span>
                        
                    </div>
                    <div className="mt-4">
                        <label>Email</label>
                        <input className="form-control" type="text" 
                        onChange={$event =>{
                            setEmail($event.target.value)
                            if($event.target.value == '')
                                setEmailErr('Email is required')
                            else
                                setEmailErr('')
                            }}/>
                        <span style={{'fontSize': 'small' , 'color' : 'red'}}> {emailErr}</span>
                    </div>
                    <div className="mt-4">
                        <label>DOB</label>
                        <input className="form-control" type="date" 
                        onChange={$event =>{
                            setDob($event.target.value)
                            if($event.target.value == '')
                                setDobErr('Select the date')
                            else
                                setDobErr('')
                            }}/>
                        <span style={{'fontSize': 'small' , 'color' : 'red'}}> {dobErr}</span>
                    </div>
                </div>
                <div className="card-footer">
                    <input type="submit" value={'Add EMployee'} disabled={!isValid} />
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    Name: {name} <br />
                    Email: {email} <br />
                    DOB: {dob} <br />
                </div>
            </div>
        </div>
        </form>
    )
}


export default AddEmployee;