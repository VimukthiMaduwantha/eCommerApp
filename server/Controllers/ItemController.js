const ItemCategoryModel = require("../Models/ItemModel");

//create item category
const CreateItemCategory = async (req, res) => {
    const {
        categoryID,
        categoryName,
        isActive
    } = req.body;

    try {
        const CategoryModel = new ItemCategoryModel({
            categoryID,
            categoryName,
            isActive
        })

        return await CategoryModel.save().then((value) => {
            return res.status(200).json({ ID: value._id });
        }).catch((err) => {
            return res.status(500).json({ err });
        })
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

// Get item category count
const GetItemCategoryCount = async (req, res) => {
    try {
        const ItemCategoryDetailCount = await ItemCategoryModel.countDocuments();
        return res.status(200).send({ ItemCategoryDetailCount })
    } catch (err) {
        return res.status(500).send("Server error");
    }
}

//get all category details
const GetAllCategoryDetails = async (req, res) => {
    try {
        const allCategory = await ItemCategoryModel.find();
        return res.status(200).send({ allCategory })
    } catch (err) {
        return res.status(500).send("Server error");
    }
}

//upadate category details
const UpdateCategoryDetails = async (req, res) => {
    const {
        categoryName,
        isActive
    } = req.body;

    const id = req.body.updateRowID;
    try {
        const UpdateDetails = {
            categoryName,
            isActive,
            modifiedDate: new Date()
        }
        await ItemCategoryModel.findByIdAndUpdate(id, UpdateDetails).then(() => {
            res.status(200).send({ status: 'Success', data: UpdateDetails })
        }).catch((err) => {
            res.status(400).send({ status: err });
        })
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

module.exports = {
    CreateItemCategory,
    GetItemCategoryCount,
    GetAllCategoryDetails,
    UpdateCategoryDetails
}