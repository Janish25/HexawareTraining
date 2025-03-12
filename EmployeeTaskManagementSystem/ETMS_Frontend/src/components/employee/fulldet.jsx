import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import EmployeeNavbar from "./navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FullDetails = () => {
    const location = useLocation();
    const task = location.state?.task;

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (task) {
            fetchComments();
        }
    }, [task]);

    // Fetch comments from backend
    const fetchComments = async () => {
        try {
            let headers = {
                Authorization: "Bearer " + localStorage.getItem("token"),
            };

            const response = await axios.get(`http://localhost:5001/api/comment/task/${task._id}`, {
                headers,
            });
            setComments(response.data);
        } catch (error) {
            console.error("Error fetching comments:", error.response?.data || error.message);
        }
    };

    // Handle comment submission
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const token = localStorage.getItem("token");

        if (!token) {
            console.error("No token found! User might not be logged in.");
            return;
        }

        try {
            setLoading(true);
            let headers = {
                Authorization: "Bearer " + token,
            };

            await axios.post(
                "http://localhost:5001/api/comment/add",
                {
                    message: newComment,
                    task: task._id,
                },
                { headers }
            );

            setNewComment(""); // Clear input
            fetchComments(); // Refresh comments
            toast.success("Comment added successfully!");
        } catch (error) {
            console.error("Error adding comment:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!task) {
        return <h2 className="text-center text-danger">No Task Details Available</h2>;
    }

    return (
        <>

           <ToastContainer />
            <div className="row">
                <div className="col-lg-12">
                    <EmployeeNavbar />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Task Details</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">{task.title}</h5>
                                <p className="text-muted">{task.shortDescription}</p>
                                <hr />
                                <p><strong>Start Date:</strong> {task.startDate.split("T")[0]}</p>
                                <p><strong>Estimated End Date:</strong> {task.estimatedEndDate.split("T")[0]}</p>
                                <hr />
                                <h6 className="text-primary">Project Details</h6>
                                <p><strong>Project Name:</strong> {task.project?.title || "No Project Assigned"}</p>
                                <p><strong>Client Name:</strong> {task.project?.clientName || "N/A"}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-secondary" onClick={() => window.history.back()}>Go Back</button>
                            </div>
                        </div>

                        {/* Comment Form */}
                        <div className="card mt-4">
                            <div className="card-header bg-secondary text-white">
                                <h5>Add a Comment</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCommentSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Your Comment</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Adding..." : "Add Comment"}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Display Comments */}
                        <div className="card mt-4">
                            <div className="card-header bg-dark text-white">
                                <h5>Comments</h5>
                            </div>
                            <div className="card-body">
                                {comments.length > 0 ? (
                                    comments.map((comment) => (
                                        <div key={comment._id} className="mb-3 p-3 border rounded bg-light">
                                            <strong className="text-primary">
                                                {comment.username || "Anonymous"}
                                            </strong>
                                            <p className="mb-1">{comment.message}</p>
                                            <small className="text-muted">{new Date(comment.commentDate).toLocaleString()}</small> 
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-muted">No comments yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FullDetails;
