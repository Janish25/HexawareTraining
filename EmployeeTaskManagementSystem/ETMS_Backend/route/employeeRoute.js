const express = require('express');
const { addEmployee, getAllEmployee, login, uploadCV ,uploadProfilePic ,getProfile,deleteEmployee } = require('../controller/employeeController');
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Multer 
const upload = multer({ dest: 'C:/Users/janis/OneDrive/Desktop/hexaware training/EmployeeTaskManagementSystem/ETMS_Frontend/public/docs/cv' });
const uploadPic = multer({ dest: 'C:/Users/janis/OneDrive/Desktop/hexaware training/EmployeeTaskManagementSystem/ETMS_Frontend/public/images/ProfilePic' });


router.post(
    "/add",
    [
        body('username').not().isEmpty(),
        body('password').isLength({ min: 6, max: 14 })
    ],
    auth,
    addEmployee
);

router.get("/getAll", auth, getAllEmployee);
router.post("/login", login);
router.post("/uploadcv", auth, upload.single('file'), uploadCV);
router.post("/uploadpic", uploadPic.single('file'), auth, uploadProfilePic);
router.get("/profile", auth, getProfile);
router.delete("/delete/:id", auth, deleteEmployee);

module.exports = router;
