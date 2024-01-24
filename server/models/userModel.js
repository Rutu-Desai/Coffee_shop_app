const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: [true],
        trim: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    Phone: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        default: 'user',
    }
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema)