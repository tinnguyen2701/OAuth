const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    method: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },
    local: {
        email: {
            type: String,
            // no required, unique
        },
        password: {
            type: String,
        }
    },
    google: {
        id: {
            type: String
        },
        email: {
            type: String
        }
    },
    facebook: {
        id: {
            type: String
        },
        email: {
            type: String
        }
    }
})

module.exports = mongoose.model('User', userSchema)
