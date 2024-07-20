// doctorTableModel.js

const mongoose = require('mongoose');

//const Counter = require('./counterModel');


const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 }
});
const Counter = mongoose.model('DoctorCounter', counterSchema);

const doctorTableSchema = new mongoose.Schema({
    doctor_id: {
        type: Number,
        unique: true
    },
    doctor_name: {
        type: String,
        required: true,
    },
    doctor_age: {
        type: Number,
        required: true,
    },
    doctor_phone: {
        type: Number,
        required: true,
    },
    doctor_email: {
        type: String,
        required: true,
    },
    doctor_address: {
        type: String,
        required: true,
    },
    doctor_username: {
        type: String,
        required: true,
    },
    doctor_password: {
        type: String,
        required: true,
    },
    doctor_department: {
        type: String,
        required: true,
    },
    doctor_qualification: {
        type: String,
        required: true,
    },
    doctor_specialization: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

doctorTableSchema.pre('save', function(next) {
    const doc = this;
    Counter.findByIdAndUpdate(
            { _id: 'doctorTableId' },
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
    )
    .then(counter => {
        doc.doctor_id = counter.sequence_value;
        next();
    })
    .catch (err => {
        console.error('Error in sequence incrementation:', err);
        next(err);
    })
});

module.exports = mongoose.model('DoctorTable', doctorTableSchema);
