const router = require('express').Router();


const userProfileController = require('../controllers/userProfileController');


router.post('/', userProfileController.postUserProfile);

module.exports = router;