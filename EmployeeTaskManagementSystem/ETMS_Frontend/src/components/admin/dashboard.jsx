import { Route, Routes, useNavigate } from "react-router-dom";
import AdminNavbar from "./navbar";

function AdminDashboard() {
  

    return (
        <div className="container-fluid bg-light min-vh-100">
            {/* Navbar */}
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar />
                </div>
            </div>

          
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="card  text-center" style={{ backgroundColor: "#6A0DAD", color: "white" }}>
                        <div className="card-body">
                            <h1 className="fw-bold">Welcome, Admin!</h1>
                            <p className="test">This is a ETMS Project,Admin Page!</p>
                        </div>
                    </div>
                </div>
            </div>


          
        </div>
    );
}

export default AdminDashboard;
