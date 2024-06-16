const mongoose = require("mongoose")
const { Schema } = mongoose;

const ItemCategoryModel = Schema(
    {
        categoryID: {
            type: String,
            required: true
        },
        categoryName: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        modifiedDate: {
            type: Date
        }
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'modifiedDate' }
    }
)

const ItemCategory = mongoose.model("Item_category", ItemCategoryModel);
module.exports = ItemCategory;