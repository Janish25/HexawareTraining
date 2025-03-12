const express = require('express');
const dbConnect = require('./config/dbConfig');

const jobRoute = require('./route/jobRoute');
const userRoute = require('./route/userRoute');
const applicationRoute = require('./route/applicationRoute');
const adminRoute = require('./route/adminRoute');

const app = express();

app.use(express.json());

dbConnect();

app.use("/api/job", jobRoute);
app.use("/api/user", userRoute);
app.use("/api/application", applicationRoute);
app.use("/api/admin", adminRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`Express server listening to port ${PORT}`));