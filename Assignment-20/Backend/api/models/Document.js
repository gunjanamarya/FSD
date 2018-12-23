const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    }
}, { collection: 'Document' })

module.exports = mongoose.model('Document', DocumentSchema);