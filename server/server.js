const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const crypto = require('crypto'); // Require the crypto module

const passport = require('passport');


connectDB();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin to access
    credentials: true, // Allow cookies and other credentials
};
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Generate a 256-bit (32-byte) random string for the session secret
const sessionSecret = crypto.randomBytes(32).toString('hex');
console.log( sessionSecret);
app.use(cookieParser());

app.use(session({
    secret: sessionSecret, // Use the generated secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());






app.use("/userList", require('./routers/userTableRouter'));
app.use("/doctorList", require('./routers/doctorTableRouter'));
app.use("/login", require('./routers/userLoginRouter'));
app.use("/logout", require('./routers/userLogoutController'));
app.use("/chatbot", require('./routers/chatbotRouter'));
app.use("/individualUserData", require('./routers/individualUserDataRouter'));
app.use("/linkeddoctor", require('./routers/linkedDoctorRouter'));
app.use("/userprofile", require('./routers/userProfile'));






const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});