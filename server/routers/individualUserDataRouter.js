const router = require('express').Router();
const IndividualUserData = require('../controllers/individualUserDataControler');

router.post('/', IndividualUserData.postIndividualUserData);


module.exports = router;