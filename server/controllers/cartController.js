const cartModel = require('../models/cartModel');

const cartItemAddController = async (req, res) => {
    try {
        const {
            id,
            UserName,
            index,
            name,
            roasted,
            imagelink_square,
            special_ingredient,
            type,
            prices,
        } = req.body
        //validation
        if(!id){
            return res.status(400).send({
                success: false,
                message: 'id'
            });
        }
        if(!UserName){
            return res.status(400).send({
                success: false,
                message: 'username'
            });
        }
        if(!name){
            return res.status(400).send({
                success: false,
                message: 'name'
            });
        }
        if(!roasted){
            return res.status(400).send({
                success: false,
                message: 'roasted'
            });
        }
        if(!special_ingredient){
            return res.status(400).send({
                success: false,
                message: 'special_ingredient'
            });
        }
        if(!type){
            return res.status(400).send({
                success: false,
                message: 'type'
            });
        }
        if(!prices){
            return res.status(400).send({
                success: false,
                message: 'prices'
            });
        }


        
        //save cart
        const cart = await cartModel({
            id,
            UserName,
            index,
            name,
            roasted,
            imagelink_square,
            special_ingredient,
            type,
            prices,
        }).save();

        return res.status(201).send({
            success: true,
            message: 'Cart Item added',
            cart,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart addition api',
            error,
        });
    }
};

const cartUpdateAddController = async (req, res) => {
    try {
        const {
            id,
            UserName,
        } = req.body

        const existingCartItem = await cartModel.findOne({UserName: UserName, id: id});
 
        existingCartItem.prices[0].quantity++;

        if(existingCartItem){
            const updatingCartItem = await cartModel.findByIdAndUpdate(
                    existingCartItem._id, {
                    prices: existingCartItem.prices
                },
            );
            if(updatingCartItem){
                return res.status(200).send({
                    success: true,
                    message: 'existing cart item incremented',
                });
            }
        }      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart update api',
            error,
        });
    }
};

const cartUpdateSubController = async (req, res) => {
    try {
        const {
            id,
            UserName,
        } = req.body

        const existingCartItem = await cartModel.findOne({UserName: UserName, id: id});
 
        existingCartItem.prices[0].quantity--;

        if(existingCartItem){
            const updatingCartItem = await cartModel.findByIdAndUpdate(
                    existingCartItem._id, {
                    prices: existingCartItem.prices
                },
            );
            if(updatingCartItem){
                return res.status(200).send({
                    success: true,
                    message: 'existing cart item decremented',
                });
            }
        }      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart update api',
            error,
        });
    }
};

const cartItemAllDeleteController = async (req, res) => {
    try {
        const {
            UserName,
        } = req.body

        const existingCartItem = await cartModel.find({UserName: UserName});

        if(existingCartItem){
            console.log(JSON.stringify(existingCartItem));
            
            for(let i=0; i<existingCartItem.length; i++){
                const updatingCartItem = await cartModel.findByIdAndDelete(
                    existingCartItem[i]._id,
                );
            }

            return res.status(200).send({
                success: true,
                message: 'item removed',
            }); 
        } 
 
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart delete api',
            error,
        });
    }
};

const cartUpdateItemAddController = async (req, res) => {
    try {
        const {
            id,
            UserName,
            prices,
        } = req.body

        const existingCartItem = await cartModel.findOne({UserName: UserName, id: id});
 
        existingCartItem.prices.push(prices[0]);

        if(existingCartItem){
            const updatingCartItem = await cartModel.findByIdAndUpdate(
                    existingCartItem._id, {
                    prices: existingCartItem.prices
                },
            );
            if(updatingCartItem){
                return res.status(200).send({
                    success: true,
                    message: 'existing cart item included with diff size',
                });
            }
        }      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart update item add api',
            error,
        });
    }
};

const cartItemGetController = async (req, res) => {
    try {
        const {
            UserName,
        } = req.body

        const cart = await cartModel.find({UserName: UserName});

        if(cart){
            return res.status(200).send({
                success: true,
                message: 'items found for user',
                cart,
            });
        }
          
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart get api',
            error,
        });
    }
};

const cartItemIncrementController = async (req, res) => {
    try {
        const {
            id,
            size,
            UserName,
        } = req.body

        const existingCartItem = await cartModel.findOne({UserName: UserName, id: id});
 
        for (let j = 0; j < existingCartItem.prices.length; j++) {
            if (existingCartItem.prices[j].size == size) {
              existingCartItem.prices[j].quantity++;
              break;
            }
          }

        if(existingCartItem){
            const updatingCartItem = await cartModel.findByIdAndUpdate(
                    existingCartItem._id, {
                    prices: existingCartItem.prices
                },
            );
            if(updatingCartItem){
                return res.status(200).send({
                    success: true,
                    message: 'cart item incremented',
                });
            }
        }      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart update increment api',
            error,
        });
    }
};

const cartItemDecrementController = async (req, res) => {
    try {
        const {
            id,
            size,
            UserName,
        } = req.body

        const existingCartItem = await cartModel.findOne({UserName: UserName, id: id});
 
        for (let j = 0; j < existingCartItem.prices.length; j++) {
            if (existingCartItem.prices[j].size == size) {
              existingCartItem.prices[j].quantity--;
              break;
            }
          }

        if(existingCartItem){
            const updatingCartItem = await cartModel.findByIdAndUpdate(
                    existingCartItem._id, {
                    prices: existingCartItem.prices
                },
            );
            if(updatingCartItem){
                return res.status(200).send({
                    success: true,
                    message: 'cart item decremented',
                });
            }
        }      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart update decrement api',
            error,
        });
    }
};

//to do
const cartItemSizeDeleteController = async (req, res) => {
    try {
        const {
            id,
            UserName,
        } = req.body

        const existingCartItem = await cartModel.findOne({UserName: UserName, id: id});

        if(existingCartItem){
            const updatingCartItem = await cartModel.findByIdAndDelete(
                existingCartItem._id
            );
            if(updatingCartItem){
                return res.status(200).send({
                    success: true,
                    message: 'item removed',
                });
            }
        }      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in cart delete api',
            error,
        });
    }
};


module.exports = {cartItemAddController , cartUpdateAddController, 
    cartUpdateSubController, cartItemAllDeleteController,cartItemGetController, cartItemSizeDeleteController,
    cartUpdateItemAddController , cartItemIncrementController, cartItemDecrementController };