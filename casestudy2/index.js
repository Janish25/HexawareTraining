const express = require('express'); // Setting up Express server
const dbconnect = require('./dbconfig');
const mongoose = require('mongoose');

const app = express(); // App is the main server

const PORT = process.env.PORT || 4002; // Use environment variable or default to 4002
const courseRoute = require('./routes/courseRoute');
const studentRoute = require('./routes/studentRoute');
const enrollmentRoute = require('./routes/enrollmentRoute');
const instructorRoute = require('./routes/instructorRoute');
const teacherRoute = require('./routes/teacherRoute')

//body parser to read json
app.use(express.json());

dbconnect();

app.use('/api/course', courseRoute);
app.use('/api/student', studentRoute);
app.use('/api/enroll', enrollmentRoute);
app.use('/api/instructor', instructorRoute);
app.use('/api/teacher', teacherRoute);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});