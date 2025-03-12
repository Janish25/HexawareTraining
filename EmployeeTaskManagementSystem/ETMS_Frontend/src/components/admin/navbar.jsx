import { NavLink } from "react-router-dom";

function AdminNavbar() {
    return (
        <nav className="navbar navbar-expand-lg px-4 shadow" style={{ backgroundColor: "#6A0572" }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-white" href="#">ETMS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <NavLink to='/admin/dashboard' className="nav-link text-white fw-semibold">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/admin/employee-onboarding' className="nav-link text-white fw-semibold">Employee Onboarding</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/admin/employees' className="nav-link text-white fw-semibold">All Employees</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/admin/add-project' className="nav-link text-white fw-semibold">Add Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/admin/add-task' className="nav-link text-white fw-semibold">Add Task</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/admin/assign-task' className="nav-link text-white fw-semibold">Assign Task</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
