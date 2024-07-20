const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 }
});
const Counter = mongoose.model('userDataCounter', counterSchema);




const individualUserDataSchema = new Schema({
    interaction_id:
    {
        type: Number,
        unique: true
    },
    patient_id:
    {
        type: Number,
        required: true
    },
    doctor_id:
    {
        type:Number,
        required: true
    },
    prompt:
    {
        type: String,
        required: true
    },
    response:
    {
        type: String,
        required: true
    },
    interaction_date:
    {
        type: Date, 
        default: Date.now
    },
    time: { type: String, default: getCurrentTime } // Time field as String
});

individualUserDataSchema.pre('save', function(next) {
    const doc = this;
    Counter.findByIdAndUpdate(
            { _id: 'individualUserDataId' },
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
    )
    .then(counter => {
        doc.interaction_id = counter.sequence_value;
        next();
    })
    .catch (err => {
        console.error('Error in sequence incrementation:', err);
        next(err);
    })
});

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false });
}


const Record = mongoose.model('IndividualUserData', individualUserDataSchema);

module.exports = Record;

