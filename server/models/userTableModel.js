const mongoose = require('mongoose');

// Define a separate schema for sequence counters
const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 }
});

// Create a model from the counter schema
const Counter = mongoose.model('counter', counterSchema);

// Define your userTable schema
const userTableSchema = new mongoose.Schema({
    patient_id: {
        type: Number,
        unique: true
    },
    patient_name: {
        type: String,
        required: true,
    },
    patient_age: {
        type: Number,
        required: true,
    },
    patient_phone: {
        type: Number,
        required: true,
    },
    patient_email: {
        type: String,
        required: true,
    },
    patient_address: {
        type: String,
        required: true,
    },
    patient_username: {
        type: String,
        required: true,
    },
    patient_password: {
        type: String,
        required: true,
    },
    doctor_id: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

// Pre-save middleware to increment patient_id
userTableSchema.pre('save', function(next) {
    const doc = this;
    Counter.findByIdAndUpdate(
        { _id: 'userTableId' },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    )
    .then(counter => {
        doc.patient_id = counter.sequence_value;
        next();
    })
    .catch(err => {
        console.error('Error in sequence incrementation:', err);
        next(err);
    });
});

module.exports = mongoose.model('userTable', userTableSchema);












/*

// userTable.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../config/dbConnection'); // Import the Mongoose connection from db.js

const userTableSchema = new Schema({
    patient_id: {
        type: Number,
        required: true,
        unique: true,
    },
    patient_name: {
        type: String,
        required: true,
    },
    patient_age: {
        type: Number,
        required: true,
    },
    patient_phone: {
        type: Number,
        required: true,
    },
    patient_email: {
        type: String,
        required: true,
    },
    patient_address: {
        type: String,
        required: true,
    },
    patient_username: {
        type: String,
        required: true,
    },
    patient_password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

userTableSchema.plugin(autoIncrement.plugin, { model: 'userTable', field: 'patient_id' });

const UserTable = connection.model('userTable', userTableSchema);

module.exports = UserTable;*/
