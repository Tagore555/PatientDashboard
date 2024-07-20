const router = require('express').Router();
try {
    const userLogoutController = require('../controllers/userLogoutContoller'); // Fixed typo in variable name
    const {postLogout} = userLogoutController; // Fixed typo in variable name
    router.route('/').post(postLogout); // Correctly assign postLogout to /logout
} catch(e) {
    console.log('Error: '+e);
}

module.exports = router;
