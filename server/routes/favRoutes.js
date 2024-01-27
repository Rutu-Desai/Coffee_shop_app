const express = require('express');
const { favSaveController , favGetController, favRemoveController , favGetAllController} = require('../controllers/favController');

//router obj
const router = express.Router();

//routes
router.post('/favSave', favSaveController);
router.post('/favGet', favGetController);

router.get('/favGetAll', favGetAllController);

router.put('/favRemove', favRemoveController);

module.exports = router;