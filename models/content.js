const mongoose = require('mongoose')
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {
        type: String,
        required : true,
    }, 
    year: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required : true,
    },
    trending: {
        type : Boolean,
        required: true,
        default: false,
    },
});

contentSchema.plugin(mongooseAutoInc.plugin, 'content');
module.exports = mongoose.model('content', contentSchema);