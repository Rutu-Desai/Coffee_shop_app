const express = require('express');
const { orderhistorySaveController , orderhistoryGetController } = require('../controllers/orderhistoryController');

//router obj
const router = express.Router()

//routes
router.post('/orderhistorySave', orderhistorySaveController);
router.post('/orderhistoryGet', orderhistoryGetController);

module.exports = router;