const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const userprofile = require('../models/userTableModel');

const postUserProfile = asyncHandler(async (req, res) => {
    const { patient_id } = req.body;
    console.log(patient_id);
    const patient = await userprofile.findOne({ patient_id});
    console.log(patient);
    if (patient) {
        res.status(200).json({
            patient_id: patient.patient_id,
            patient_name: patient.patient_name,
            patient_email: patient.patient_email,
            patient_phone: patient.patient_phone,
            patient_address: patient.patient_address,
            patient_age: patient.patient_age,
            doctor_id: patient.doctor_id,
        });
    } else {
        res.status(404);
        throw new Error('patient not found');
    }
});

module.exports = { postUserProfile };