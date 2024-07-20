const router = require('express').Router();
const chatbotController = require('../controllers/chatbotController');

router.post('/', chatbotController.generateResponse);

module.exports = router;
