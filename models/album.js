var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    type:String,
    tags:Array,
    caption:Object,
    user: Object,
    images: Object
});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;