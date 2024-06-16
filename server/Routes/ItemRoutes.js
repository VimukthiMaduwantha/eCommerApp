const ItemController = require('../Controllers/ItemController')
const express = require('express')

const ItemRoute = express.Router();

//create item category
ItemRoute.post('/createItemCategory', ItemController.CreateItemCategory);

//get item category count
ItemRoute.get('/getCategoryCount', ItemController.GetItemCategoryCount);

//get allcategory details
ItemRoute.get("/getAllCategoryDetails", ItemController.GetAllCategoryDetails);

//update category detyails
ItemRoute.put('/updateItemCategory', ItemController.UpdateCategoryDetails);


module.exports = ItemRoute;