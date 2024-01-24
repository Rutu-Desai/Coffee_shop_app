const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    UserName: {
        type: String,
    },
    index: {
        type: Number,
    },
    name: {
        type: String,
    },
    roasted: {
        type: String,
    },
    imagelink_square: {
        type: Number,
    },
    special_ingredient: {
        type: String,
    },
    type: {
        type: String,
    },
    prices: {
        type: [{
            size: {
                type: String,
            },
            price: {
                type: String,
            },
            currency: {
                type: String,
            },
            quantity: {
                type: Number,
            },
        }],
    }
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('Cart', cartSchema);