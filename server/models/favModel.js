const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
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
    description: {
        type: String,
    },
    roasted: {
        type: String,
    },
    imagelink_square: {
        type: Number,
    },
    imagelink_portrait: {
        type: Number,
    },
    special_ingredient: {
        type: String,
    },
    ingredients: {
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
        }],
    },
    average_rating: {
        type: Number,
    },
    ratings_count: {
        type: String,
    },
    favourite: {
        type: Boolean,
    },
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('Fav', favSchema);