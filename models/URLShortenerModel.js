const Schema = require('mongoose').Schema;
const {model} = require('mongoose');
const { nanoid } = require('nanoid');

const shortUrlSchema = new Schema({
    fullURL:{
        type:String,
        required: true
    },
    shortURL:{
        type:String,
        required:true,
        default:() => nanoid()
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
});

const ShortURL = model('ShortURL', shortUrlSchema);

module.exports = ShortURL;