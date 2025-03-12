const Comment = require("../model/comment");


exports.addComment = async(req, res) => {
    try
    {
        const {message, task} = req.body;
        let comment = new Comment({'message': message, 'task': task})
        comment = await comment.save();
        res.status(200).json(comment)
    }
    catch(err)
    {
        res.status(400).json({'msg':'Error in api'})
    }
}


// Get all comments for a specific task
exports.getCommentsByTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const comments = await Comment.find({ task: taskId }).sort({ commentDate: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};