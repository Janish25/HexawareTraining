import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router";

function UpdateEmployee(){
    let location = useLocation();
    const [employee,setEmployee] = useState({}); 
    const [fname,setFname] = useState(undefined);
    const [lname,setLname] = useState(undefined);
    const [email,setEmail] = useState(undefined);
    const [msg,setMsg] = useState(undefined); 
    const navigate = useNavigate();

    console.log('Update of Employee with ID: ' +location.state.id);
    const getUserApi = 'https://reqres.in/api/users/'+location.state.id
    const putUserApi = 'https://reqres.in/api/users/'+location.state.id
    
      useEffect(()=>{
        fetch(getUserApi )
        .then(response=>response.json())
        .then(json=> {
             setEmployee(json.data)
             setFname(json.data.first_name)
             setLname(json.data.last_name)
             setEmail(json.data.email)
        })
        .catch(err=>{
            console.log(err)
            setMsg(`Employee fetch unsuccessfull`)
        })
      },[]);

      const update = ($event)=>{
        $event.preventDefault()
        fetch(putUserApi, {
            method: 'PUT',
            body: {
                'first_name' : fname, 
                'last_name' : lname,
                'email': email
            }
        } )
        .then(response=>response.json())
        .then(json=> {
              setMsg('Employee Record Updated')
             
        })
        .catch(err=>{
            console.log(err)
            setMsg(`Employee fetch unsuccessfull`)
        })
      }
    return(

        <div>
            <div className="row">
                 <div className="col-lg-12">
                    <h1 class="display-6">Update Employee</h1>
                    <hr />
                </div>   
            </div>
             <div className="row">
            <div className="col-sm-4">

            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-title">
                        <div className="card-body">
                            {msg ? <div className="alert alert-primary">
                                {msg}
                            </div> : ""}
                            <form onSubmit={update}>
                               <div className="mb-2">
                                    <label>Enter First Name: </label>
                                    <input type="text" className="form-control" 
                                        value={fname}
                                        onChange={($event)=> setFname($event.target.value)}/>
                               </div>
                               <div className="mb-2">
                                    <label>Enter Last Name: </label>
                                    <input type="text" className="form-control" 
                                        value={lname}
                                        onChange={($event)=> setLname($event.target.value)}/>
                               </div>
                               <div className="mb-2">
                                    <label>Enter Email: </label>
                                    <input type="text" className="form-control" 
                                        value={email}
                                        onChange={($event)=> setEmail($event.target.value)}/>
                               </div>
                               <div>
                                    <input type="submit" value="Update Employee Record" 
                                    className="btn btn-primary"
                                    disabled={(!fname || (fname === employee.first_name))  
                                        && (!lname || (lname === employee.last_name)) 
                                        && (!email || (email === employee.email))
                                    } 
                                    />

                                        &nbsp;
                                        {msg==='Employee Record Updated' ? <button className="btn btn-info" onClick={()=>navigate('/employee')}>
                                             Go to Employee List
                                        </button> : ""}
                               </div>
                            </form>
                        </div>
                    </div>        
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>
        </div>
    )
}

export default UpdateEmployee