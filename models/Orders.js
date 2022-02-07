const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    placedBy: {
        type: String,
        required: true
    },
    placedByUserId: {
        type: Number,
        required: true
    },
    placedOn: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('order', ordersSchema, 'order');

