const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealTypesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mealtype', mealTypesSchema, 'mealtypes');