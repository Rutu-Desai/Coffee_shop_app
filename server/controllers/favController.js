const favModel = require('../models/favModel');

const favSaveController = async (req, res) => {
    try {
        const {
            UserName,
            id,
            name,
            description,
            roasted,
            imagelink_square,
            imagelink_portrait,
            ingredients,
            special_ingredient,
            prices,
            average_rating,
            ratings_count,
            favourite,
            type,
            index,
        } = req.body
        
        //save oder details
        const fav = await favModel({
            UserName,
            id,
            name,
            description,
            roasted,
            imagelink_square,
            imagelink_portrait,
            ingredients,
            special_ingredient,
            prices,
            average_rating,
            ratings_count,
            favourite,
            type,
            index,
        }).save();

        return res.status(200).send({
            success: true,
            message: 'fav added to fav list',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in fav save api',
            error,
        });
    }
};

const favGetController = async (req, res) => {
    try {
        const {
            UserName,
        } = req.body
        
        const favlist = await favModel.find({UserName: UserName});

        return res.status(200).send({
            success: true,
            message: 'items retrieved from fav list',
            favlist,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in fav get api',
            error,
        });
    }
};

const favRemoveController = async (req, res) => {
    try {
        const {
            UserName,
            type,
            id,
        } = req.body
        
        const favItem = await favModel.findOne({UserName: UserName, type: type, id: id});

        const favRemoved = await favModel.findByIdAndDelete(favItem._id);

        return res.status(200).send({
            success: true,
            message: 'item removed',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in fav remove api',
            error,
        });
    }
};


module.exports = {favSaveController, favGetController, favRemoveController};