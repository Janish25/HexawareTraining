import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AddProject(){
    const [title,settitle]=useState(undefined)
    const [startDate,setstartdate]=useState(undefined)
    const [shortDescription,setshortdec]=useState(undefined)
    const [clientName,setclientName]=useState(undefined)
    const [techStack,settechStack]=useState(undefined)
    const [estimatedend,setetimatedend]=useState(undefined)
    const [msg,setmsg]=useState(undefined)

    const Project=async($event)=>{
        try{
        $event.preventDefault();
        let projectapi='http://localhost:5001/api/project/add'
        let header={
            'Authorization':'Bearer '+localStorage.getItem('token')
        }
        const responce=await axios.post(projectapi,{
            'title':title,
            'startDate':startDate,
            'shortDescription':shortDescription,
            'clientName':clientName,
            'techStack':techStack,
            'estimatedEndDate':estimatedend
        },{headers:header})
        setmsg('Project Added')
    }
    catch(error){
        setmsg('error in Project Adding');
    }

    }
    return(
        <div>
            <div className="row">
                <div className="col-lg-12">
                <AdminNavbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-mt-4-sm-4">
                    <div className="card">
                        <div className="card-header"  style={{ backgroundColor : '#AC72AC' }}>
                           <strong> Add Project</strong>
                        </div>
                        <div></div>
                        <div className="card-body">
                            <form className="row g-3" onSubmit={Project}>
                                {msg?<div className="col-mb-6">
                                    <div className="alert alert-primary">
                                    {msg}
                                    </div>
                                </div>:""}
                                <div className="col-md-6">
                                    <label className="form-label">title*</label>
                                    <input type="text" className="form-control"
                                        onChange={($event) => settitle($event.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" >startDate</label>
                                    <input type="text" className="form-control" placeholder='YYYY-MM-DD'
                                        onChange={($event) => setstartdate($event.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">shortDescription*</label>
                                    <input type="text" className="form-control"
                                        onChange={($event) => setshortdec($event.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">clientName</label>
                                    <input type="text" className="form-control"
                                        onChange={($event) => setclientName($event.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">techStack</label>
                                    <input type="text" className="form-control"
                                        onChange={($event) => settechStack($event.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" >estimatedEndDate</label>
                                    <input type="text" className="form-control" placeholder='YYYY-MM-DD'
                                        onChange={($event) => setetimatedend($event.target.value)} />
                                </div>


                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Add Project</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AddProject;