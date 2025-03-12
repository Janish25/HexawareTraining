const mongoose = require('mongoose');

const dbConnect  = async () => {
    try{
        await mongoose.connect('mongodb+srv://JanishKumar:janish123@training-cluster.r9k6x.mongodb.net/?retryWrites=true&w=majority&appName=Training-cluster');
        console.log("DB connection established");
    }
    catch(err){
        console.log('Error while connecting... '+err);
    }
}

//dbConnect();

module.exports = dbConnect;