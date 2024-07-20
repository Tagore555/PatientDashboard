const mongose = require('mongoose');



const connectDB = async () => {
    try{
        const connect = await mongose.connect(process.env.CONNECTION_URL);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;