const ItemController = require('../Controllers/ItemController')
const express = require('express')

const ItemRoute = express.Router();

//create item category
ItemRoute.post('/createItemCategory', ItemController.CreateItemCategory);

module.exports = ItemRoute;