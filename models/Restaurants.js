const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('restaurant', restaurantSchema, 'restaurants');

