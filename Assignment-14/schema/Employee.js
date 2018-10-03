const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, { collection: 'Employee' })

module.exports = mongoose.model('Employee', EmployeeSchema);