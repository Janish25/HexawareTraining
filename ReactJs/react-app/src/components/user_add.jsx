import { useState } from "react";

function AddUser(){

    const [name,setName] = useState(undefined); 
    const [job,setJob] = useState(undefined);
    const [msg,setMsg] = useState(undefined)
    const postUserApi = 'https://reqres.in/api/user'
    const addUserDetails = ($event)=>{
        $event.preventDefault();
        fetch(postUserApi ,{
            method: "post", 
            body: {
                "name": name,
                "job": job
            }
        } )
        .then(response=>response.json())
        .then(data=> {
            console.log(data)
            setMsg(`User created with id ${data.id}`)
        })
        .catch(err=>{
            console.log(err)
            setMsg(`User creation unsuccessfull`)
        })
    }
    return(
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
                            <form onSubmit={addUserDetails}>
                               <div className="mb-2">
                                    <label>Enter Name: </label>
                                    <input type="text" className="form-control" 
                                        onChange={($event)=> setName($event.target.value)}/>
                               </div>
                               <div className="mb-2">
                                    <label>Enter Job Title: </label>
                                    <input type="text" className="form-control" 
                                        onChange={($event)=> setJob($event.target.value)}/>
                               </div>
                               <div>
                                     
                                    <input type="submit" value="Add User" 
                                    className="btn btn-primary"
                                    disabled={!name || !job} 
                                    />
                               </div>
                            </form>
                        </div>
                    </div>        
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>
    )
}

export default AddUser; 