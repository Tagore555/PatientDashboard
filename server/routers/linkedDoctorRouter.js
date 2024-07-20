const router = require('express').Router();


const linkedDoctorController = require('../controllers/linkedDoctorController');


router.post('/', linkedDoctorController.postLinkedDoctor);

module.exports = router;