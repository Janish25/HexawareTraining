import { useEffect, useState } from "react";
import EmployeeNavbar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const GetAllTask = () => {
    const navigate = useNavigate()

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTask = async () => {
            const getApi = 'http://localhost:5001/api/task/getAll'
            const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };

            const response = await axios.get(getApi, { headers: header });
            setTasks(response.data);
            console.log(response.data)
        }
        getTask()
    }, [])

    const gotoRoute = (task) => {
        navigate('/employee/tasks/details', { state: { task } })
    }

    const handleArchive = async(task) => {
        const id = task._id;
        console.log(id)
        const putApi = `http://localhost:5001/api/task/updateTask/${id}`;
        const header = {
            'Authorization': 'Bearer '+ localStorage.getItem('token')
        }
        await axios.put(putApi, {'status': "archive" }, {headers: header})
        toast("Archived successfully")
        setFlag(1);
    }

    return (
        <>
            <>
                <div className="row">
                    <div className="col-lg-12">
                        <EmployeeNavbar />
                        <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                    </div>
                </div>

                <div className="row">
                    {tasks.map((t, index) => (
                        <div className="col-md-6 mt-4" key={index}>
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <span>Start Date: {(t.startDate).split("T")[0]}</span>
                                    <span className="badge bg-success">#{t.status}</span>
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{t.title}</h5>
                                    <p className="mb-1"><strong>Project Name:</strong> {t.project.title}</p>
                                    <p className="mb-3">{t.shortDescription}</p>

                                    <button
                                        className="btn btn-info mt-auto"
                                        onClick={() => gotoRoute(t)}
                                    >
                                        View Full Details
                                    </button>
                                </div>

                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <small>Estimated End Date: {(t.estimatedEndDate).split("T")[0]}</small>

                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleArchive(t)
                                        }
                                    >
                                        Archive
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>

        </>
    )
}

export default GetAllTask;