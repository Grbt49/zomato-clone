const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemsSchema = new Schema({
    restaurantId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menuItems', menuItemsSchema, 'items');