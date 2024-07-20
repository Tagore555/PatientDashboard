const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const doctorTable = require('../models/doctorTableModel');


const getDoctor = asyncHandler(async (req, res) => {
    const getDoctorData = await doctorTable.find({});
    res.status(200).json(getDoctorData);
});

// Post a new doctor to the database
const postDoctor = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {doctor_name,doctor_age,doctor_phone,doctor_email,doctor_address,doctor_username,doctor_password,doctor_department,doctor_qualification,doctor_specialization} = req.body;
    if (!doctor_name || !doctor_age || !doctor_phone || !doctor_email || !doctor_address || !doctor_username || !doctor_password || !doctor_department || !doctor_qualification || !doctor_specialization) {
        res.status(403);
        throw new Error('Please fill all the fields');
    }

    const hashedPassword = await bcrypt.hash(doctor_password, 10);
    const newDoctorData = await doctorTable.create({
        doctor_name,
        doctor_age,
        doctor_phone,
        doctor_email,
        doctor_address,
        doctor_username,
        doctor_password: hashedPassword,
        doctor_department,
        doctor_qualification,
        doctor_specialization
    });

    res.status(201).json(newDoctorData); // Changed status code to 201 for created
});

module.exports = { getDoctor, postDoctor };
