const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const userTable = require('../models/userTableModel');




//@reterving all the users from the database

const getUser =asyncHandler( async (req, res) => {
    const getUserData = await userTable.find({});
    res.status(200).json(getUserData);
});


//@post the user to the database


const postUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {patient_name,patient_age,patient_phone,patient_email,patient_address,patient_username,patient_password,doctor_id} = req.body;
    if(!patient_name || !patient_age || !patient_phone || !patient_email || !patient_address || !patient_username || !patient_password || !doctor_id){
        res.status(403);
        throw new Error('Please fill all the fields');
    }
    const hashedpassword = await bcrypt.hash(patient_password,10);
    const newUserDataField = await userTable.create({patient_name,patient_age,patient_phone,patient_email,patient_address,patient_username,patient_password:hashedpassword,doctor_id});
    res.status(200).json(newUserDataField);
});


module.exports = {getUser,postUser};