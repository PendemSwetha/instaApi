const mongooose = require('mongoose');

const postSchema = new mongooose.Schema({
    // Your code goes here
author:{type:String},
location:{type:String},
likes:{type:Number,default:0},
description:{type:String},
postImage:{type:String},
date:{type:String}
})

const postModel = mongooose.model('postdata', postSchema);


module.exports = postModel;