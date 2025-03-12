import { NavLink } from "react-router-dom";

function EmployeeNavbar() {
    return (
        <nav className="navbar navbar-expand-lg px-4 shadow" style={{ backgroundColor: "#6A0572" }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-white" href="#">ETMS</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <NavLink to="/employee/tasks" className="nav-link text-white fw-semibold">
                                Tasks
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default EmployeeNavbar;
