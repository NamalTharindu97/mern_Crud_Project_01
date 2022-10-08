const mongoose = require("module");


const  postSchema = new mongoose.Schema({ // this for create schema for posts
    topic : {
        type  : String  ,  // this for create schema for posts
        require : true
    },
    description : {
        type : String ,
        require : true  // this for create schema for posts
    },
    postCategory :{
        type : String ,
        require : true   // this for create schema for posts
    }
})

module.exports = mongoose.model( 'Posts' , postSchema )