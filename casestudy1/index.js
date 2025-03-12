const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const dbconnect = require('./dbconfig');

const app = express();
const PORT = process.env.PORT || 4002;


app.use(express.json());

dbconnect();

app.use('/api/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
