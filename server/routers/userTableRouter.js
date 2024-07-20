const router = require('express').Router();


const userTableController = require('../controllers/userTableController');

const {getUser,postUser} = userTableController;

router.route('/').get(getUser).post(postUser);



module.exports = router;