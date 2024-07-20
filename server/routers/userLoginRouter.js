const router = require('express').Router();
const userLoginController = require('../controllers/userLoginController');

const { authenticateUser ,getUser} = userLoginController;

// Define the POST route for user login
router.route('/').post(authenticateUser);

// Define the GET route for fetching user data
router.route('/hello').get(getUser);

module.exports = router;
