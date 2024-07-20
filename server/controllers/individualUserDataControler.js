const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const individualUserData = require('../models/individualUserData');

const postIndividualUserData = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {patient_id,doctor_id, prompt, response } = req.body;
    if (!patient_id||!doctor_id||!prompt || !response) {
        res.status(403);
        throw new Error('Please fill all the fields');
    }      
        
        
    
    const newIndividualUserData = await individualUserData.create({
        patient_id,
        doctor_id,
        prompt,
        response
    });
    res.status(201).json(newIndividualUserData); // Changed status code to 201 for created
});



module.exports = { postIndividualUserData };