const express = require('express');
const { cartItemAddController, cartUpdateAddController, cartUpdateSubController , cartItemAllDeleteController, 
    cartItemGetController, cartUpdateItemAddController, cartItemIncrementController, cartItemDecrementController,
    cartItemSizeDeleteController
} = require('../controllers/cartController'); 

//router obj
const router = express.Router()

//routes
router.post('/cartItemAdd', cartItemAddController);
router.put('/cartUpdateAdd', cartUpdateAddController);
router.put('/cartUpdateSub', cartUpdateSubController);
router.put('/cartUpdateItemAdd', cartUpdateItemAddController);

router.put('/cartItemIncrement', cartItemIncrementController);
router.put('/cartItemDecrement', cartItemDecrementController);

router.put('/cartItemAllDelete', cartItemAllDeleteController);
router.put('/cartItemSizeDelete', cartItemSizeDeleteController);

router.put('/cartItemGet', cartItemGetController);

module.exports = router;