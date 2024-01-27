const express = require('express');
const { orderhistorySaveController , orderhistoryGetController , orderhistoryGetAllController} = require('../controllers/orderhistoryController');

//router obj
const router = express.Router()

//routes
router.post('/orderhistorySave', orderhistorySaveController);
router.post('/orderhistoryGet', orderhistoryGetController);

router.get('/orderhistoryGetAll', orderhistoryGetAllController);

module.exports = router;