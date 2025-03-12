// connection string :   mongodb+srv://JanishKumar:Naveen420*@training-cluster.r9k6x.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=Training-cluster

const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://JanishKumar:janish123@training-cluster.r9k6x.mongodb.net/?retryWrites=true&w=majority&appName=Training-cluster' );
        
        console.log(" DB Connected Successfully!");
    } catch (err) {
        console.error("DB Connection Failed",err);
    }
};

module.exports=dbconnect;
