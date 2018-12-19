const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ssoId: {
        type: String,
        required: true
    }
}, { collection: 'User' })

module.exports = mongoose.model('User', UserSchema);