import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function Addtask() {
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [shortDescription, setShortDesc] = useState("");
    const [estimatedEnd, setEstimatedEnd] = useState("");
    const [msg, setMsg] = useState("");
    const [pid, setPid] = useState("");
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                let projectApi = 'http://localhost:5001/api/project/getall?page=1&size=6';
                let response = await axios.get(projectApi);
                setProject(response.data.data);
            } catch (error) {
                setMsg('Error in fetching projects');
            }
        };
        fetchProjects();
    }, []);

    const handleTaskSubmit = async (event) => {
        event.preventDefault();
        try {
            let taskApi = `http://localhost:5001/api/task/add/${pid}`;
            await axios.post(taskApi, {
                title,
                startDate,
                shortDescription,
                estimatedEndDate: estimatedEnd
            });
            setMsg('Task Added Successfully!');
        } catch (error) {
            setMsg('Task adding failed');
        }
    };

    return (
        <div className="container py-4">
            <div className="row mb-4">
                <div className="col">
                    <AdminNavbar />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-4" style={{ backgroundColor: '#AC72AC' }}>
                        <div className="card-header text-white text-center rounded-top-4" style={{ backgroundColor: '#8b008b' }}>
                            <h4 className="mb-0">Add Task</h4>
                        </div>
                        <div className="card-body">
                            {msg && <div className="alert alert-info text-center">{msg}</div>}
                            <form className="row g-3" onSubmit={handleTaskSubmit}>
                                <div className="col-md-12">
                                    <label className="form-label">Title*</label>
                                    <input type="text" className="form-control border-danger"
                                        onChange={(e) => setTitle(e.target.value)} required />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Short Description*</label>
                                    <input type="text" className="form-control border-danger"
                                        onChange={(e) => setShortDesc(e.target.value)} required />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control border-danger"
                                        onChange={(e) => setStartDate(e.target.value)} required />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Estimated End Date</label>
                                    <input type="date" className="form-control border-danger"
                                        onChange={(e) => setEstimatedEnd(e.target.value)} required />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Select Project</label>
                                    <select className="form-control border-danger" onChange={(e) => setPid(e.target.value)}>
                                        <option>-- Select Project --</option>
                                        {project.map((p, index) => (
                                            <option key={index} value={p._id}>{p.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-12 text-center mt-3">
                                    <button type="submit" className="btn text-white px-4 rounded-pill shadow" style={{ backgroundColor: '#8b008b ' }}>
                                        Add Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addtask;
