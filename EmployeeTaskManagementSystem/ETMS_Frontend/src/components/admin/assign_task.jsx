import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

const AssignTask = () => {
    const [employees, setEmployees] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [empId, setEmpId] = useState("");
    const [taskId, setTaskId] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
            try {
                const empRes = await axios.get('http://localhost:5001/api/employee/getAll', { headers: header });
                const taskRes = await axios.get('http://localhost:5001/api/task/getAll', { headers: header });
                setEmployees(empRes.data);
                setTasks(taskRes.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const process = async (event) => {
        event.preventDefault();
        try {
            const assignApi = 'http://localhost:5001/api/assign/add/task/employee';
            const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
            await axios.post(assignApi, { 'eid': empId, 'tid': taskId }, { headers: header });
            setMsg("Task Assigned Successfully");
        } catch (error) {
            console.error("Error assigning task", error);
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12"><AdminNavbar /></div>
            </div>
            <div className="row justify-content-center" style={{ marginTop: '8%' }}>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center  " style={{ backgroundColor: "#6A0572", color : "white" }}>
                            Assign Task to Employee
                        </div>
                        <div className="card-body">
                            {msg && <div className="alert alert-success">{msg}</div>}
                            <form onSubmit={process}>
                                <div className="mb-3">
                                    <label className="form-label">Select Employee:</label>
                                    <select className="form-control" onChange={(e) => setEmpId(e.target.value)}>
                                        <option value="">--- Select Employee ---</option>
                                        {employees.map((e) => (
                                            <option key={e._id} value={e._id}>
                                                {e.name} - {e.jobTitle}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Select Task:</label>
                                    <select className="form-control" onChange={(e) => setTaskId(e.target.value)}>
                                        <option value="">--- Select Task ---</option>
                                        {tasks.map((t) => (
                                            <option key={t._id} value={t._id}>
                                                {t.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Assign Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignTask;
