import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setmsg] = useState("");
    const navigate = useNavigate();

    const processLogin = async (event) => {
        event.preventDefault();
        let loginApi = 'http://localhost:5001/api/auth/login';
      
        try {
            const response = await axios.post(loginApi, {
                'username': username,
                'password': password
            });
            console.log(response);
            let role = response.data.role;
            localStorage.setItem("token", response.data.token);
            switch (role) {
                case 'ROLE_ADMIN':
                    navigate('/admin/dashboard');
                    break;
                case 'ROLE_EMPLOYEE':
                    navigate('/employee/dashboard');
                    break;
                default:
                    break;
            }
            return;
        } catch (error) {
            setmsg('Invalid Credentials');
        }
    };

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ background: "#f8f9fa", height: "100vh" }}>
            <div className="card shadow-lg border-0 rounded-lg" style={{ width: "400px", backgroundColor: "#ffffff" }}>
                <div className="card-header bg-dark text-white text-center py-3">
                    <h4 className="mb-0">Login</h4>
                </div>
                <div className="card-body p-4">
                    {msg && <div className="alert alert-danger text-center">{msg}</div>}
                    <form onSubmit={processLogin}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Username:</label>
                            <input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Password:</label>
                            <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-dark w-100" disabled={!username || !password}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;