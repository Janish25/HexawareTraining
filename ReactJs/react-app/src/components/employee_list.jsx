import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import axios from 'axios';
import {toast } from 'react-toastify';

function EmployeeList(){
    const [employees,setEmployees] = useState([]);
    const [page,setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(()=>{
        const getApiUrl='https://reqres.in/api/users?page=' + page
        fetch(getApiUrl)
        .then(resp => resp.json())
        .then(json=> {
            setEmployees(json.data);
            setTotalPages(json.total_pages)
        })
    },[page])
 
    const deleteEmployee = async (id)=>{
        try {
            const deleteApi = 'https://reqres.in/api/users/' + id
            const response = await axios.delete(deleteApi);
             let temp = [...employees].filter((e)=> e.id !== id)
             setEmployees(temp)
              toast("Employee record deleted!!!");
          } catch (error) {
            console.error(error);
          }
    }
    return(
        <div className="card" style={{backgroundColor : "#FFEEEE"}}>
            <div className="card-body">
                <table className="table caption-top align-middle">
                    <caption>List of employees [page: {page}]</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Profile Pic</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td >
                                        <div className="circular_image">
                                            <img src={emp.avatar}></img>
                                        </div>
                                    </td>
                                    <td style={{"width": "20%"}}>{emp.first_name}</td>
                                    <td style={{"width": "20%"}}>{emp.last_name}</td>
                                    <td style={{"width": "30%"}}>{emp.email}</td>
                                    <td>
                                        <span>
                                        <NavLink to= "/employee-update" state={{ id: emp.id }}>  <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg>   
                                            </NavLink> 
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href="#" onClick={()=>deleteEmployee(emp.id)}>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br />
                <nav  >
                    <ul className="pagination justify-content-center">
                        {page == 1 ?
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" >Previous</a>
                            </li> :
                            <li className="page-item ">
                                <a className="page-link" href="#" tabIndex="-1" onClick={()=>setPage(page-1)}>Previous</a>
                            </li>
                        }
                        
                        {
                            [...Array(totalPages)].map((p, index) => (
                                <li key={index} className="page-item">
                                    { (index+1) === page?
                                        <span className="page-link">{index+1} </span>
                                        :
                                        <a className="page-link" href="#" onClick={()=> setPage(index+1)}>{index+1} </a>
                                     }
                                    
                                </li>
                            ))
                        } {/** [...Array(totalPages)] = [undefined,undefined]*/ }
                        {
                            page == totalPages ?
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" >Next</a>
                                </li>
                                :
                                <li className="page-item">
                                    <a className="page-link" href="#" onClick={()=>setPage(page+1)}>Next</a>
                                </li>
                        }
                        
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default EmployeeList;