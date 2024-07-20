const router = require('express').Router();


const userDoctorController = require('../controllers/doctorTableController');

const {getDoctor,postDoctor} = userDoctorController;

router.route('/').get(getDoctor).post(postDoctor);



module.exports = router;