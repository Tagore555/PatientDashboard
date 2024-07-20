const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');



const linkedDoctor = require('../models/doctorTableModel');

const postLinkedDoctor = asyncHandler(async (req, res) => {
    const { doctor_id } = req.body;
    console.log(doctor_id);
    const doctor = await linkedDoctor.findOne({ doctor_id});
    console.log(doctor);
    if (doctor) {
        res.status(200).json({
            doctor_id: doctor.doctor_id,
            doctor_name: doctor.doctor_name,
            doctor_email: doctor.doctor_email,
            doctor_phone: doctor.doctor_phone,
            doctor_address: doctor.doctor_address,
            doctor_department: doctor.doctor_department,
            doctor_qualification: doctor.doctor_qualification,
            doctor_specialization: doctor.doctor_specialization
        });
    } else {
        res.status(404);
        throw new Error('Doctor not found');
    }

});



module.exports = { postLinkedDoctor };