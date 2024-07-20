/*const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userLogin = require('../models/userTableModel');

// Passport Local Strategy for user authentication
passport.use(new LocalStrategy(
    { usernameField: 'patient_username', passwordField: 'patient_password' },
    async (username, password, done) => {
        try {
            const user = await userLogin.findOne({ patient_username: username });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isValid = await bcrypt.compare(password, user.patient_password);
            if (!isValid) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));


// Serialize user to determine which data of the user object should be stored in the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user to retrieve user data from the session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await userLogin.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

// Middleware to authenticate using Passport and store user info in session
const authenticateUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message55: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            // Store user information in session
            req.session.patient_username = user.patient_username;
            req.session.patient_id = user._id; // Assuming _id is used as patient_id
            req.session.save(err => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error saving session' });
                }
            });
            
            return res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
    const a = req.session.patient_username;
    console.log(a);
};


const getUser = async (req, res) => {
        const a = req.session.patient_username;
        console.log(a);
};

module.exports = { authenticateUser , getUser};

*/






const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userTableModel');

// Middleware to authenticate using Passport and store user info in session
const authenticateUser = async (req, res) => {
    const { patient_username, patient_password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ patient_username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        
        // Verify the password
        const isValid = await bcrypt.compare(patient_password, user.patient_password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        // Generate JWT token
        const accessToken = jwt.sign({ patient_username: user.patient_username, patient_id: user.patient_id, doctor_id: user.doctor_id }, "jwt-access-accessToken-secert-key", { expiresIn: '10m' });

        // Set cookie with JWT accessToken
        res.cookie('token', accessToken, {
            maxAge: 660000,

        });
        //console.log(token);
        console.log(req.cookies);

        // Return success response
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
    const token1 = req.cookies.token;
    console.log(token1);

};

const getUser = async (req, res) => {
    console.log(req.cookies);
    console.log("Hello world********************************************");
    try {
        // Extract token from cookie
        const token = req.cookies.token;
        console.log(token);
        // Decode the token to get patient_id
        const decodedToken = jwt.verify(token, "jwt-access-accessToken-secert-key");
        const patient_id = decodedToken.patient_id;
        const doctor_id = decodedToken.doctor_id;
        console.log(patient_id, doctor_id);
        res.json ({ patient_id, doctor_id });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
};

module.exports = { authenticateUser , getUser};
