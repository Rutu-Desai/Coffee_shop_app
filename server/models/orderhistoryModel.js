const mongoose = require('mongoose');

const orderhistorySchema = new mongoose.Schema({
    UserName: {
        type: String,
    },
    OrderDate: {
        type: String,
    },
    CartList: {
        type: [{
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
        ],
    },
    CartPrice: {
        type: String,
    }
});

module.exports = mongoose.model('OrderHistory', orderhistorySchema);