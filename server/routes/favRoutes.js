const express = require('express');
const { favSaveController , favGetController, favRemoveController } = require('../controllers/favController');

//router obj
const router = express.Router();

//routes
router.post('/favSave', favSaveController);
router.post('/favGet', favGetController);
router.put('/favRemove', favRemoveController);

module.exports = router;