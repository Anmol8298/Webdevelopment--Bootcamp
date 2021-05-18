const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
});

const Blogpost = mongoose.model('Blogpost',blogpostSchema);

module.exports = Blogpost;