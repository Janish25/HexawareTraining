import { NavLink } from "react-router";
import AdminNavbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        try {
            let header = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };
            const resp = await axios.get('http://localhost:5001/api/employee/getall', {
                headers: header
            });

            setEmployees(resp.data);
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
       
            try {
                let header = {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                };

                await axios.delete(`http://localhost:5001/api/employee/delete/${id}`, {
                    headers: header
                });

                
                setEmployees(employees.filter(employee => employee._id !== id));
            } catch (error) {
                console.log("Error deleting employee:", error);
            }
        
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Name</th>
                                <th scope="col">JobTitle</th>
                                <th scope="col">Salary</th>
                                <th scope="col">City</th>
                                <th scope="col">Username</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((e, index) => (
                                    <tr key={e._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <div className="circular_image">
                                                <img
                                                    src={"https://tse2.mm.bing.net/th?id=OIP.cfO32FDXwrTQ7JhtkPTpQwHaHa&pid=Api&P=0&h=180"}
                                                    alt=" Profile"
                                                    width="50"
                                                    height="50"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                            </div>
                                        </td>
                                        <td>{e.name}</td>
                                        <td>{e.jobTitle}</td>
                                        <td>{e.salary}</td>
                                        <td>{e.city}</td>
                                        <td>{e.username}</td>
                                        <td>
                                            <a href="#" onClick={() => handleDelete(e._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default EmployeeList;
