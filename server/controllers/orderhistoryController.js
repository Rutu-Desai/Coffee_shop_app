const orderhistoryModel = require('../models/orderhistoryModel');

const orderhistorySaveController = async (req, res) => {
    try {
        const {
            UserName,
            OrderDate,
            CartList,
            CartPrice,
        } = req.body
        
        //save oder details
        const order = await orderhistoryModel({
            UserName,
            OrderDate,
            CartList,
            CartPrice,
        }).save();

        return res.status(200).send({
            success: true,
            message: 'order added to order history',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in order save api',
            error,
        });
    }
};

const orderhistoryGetController = async (req, res) => {
    try {
        const {
            UserName,
        } = req.body
        
        const orderhistory = await orderhistoryModel.find({UserName: UserName});

        return res.status(200).send({
            success: true,
            message: 'items retrieved from order history',
            orderhistory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in order get api',
            error,
        });
    }
};


module.exports = {orderhistorySaveController, orderhistoryGetController};