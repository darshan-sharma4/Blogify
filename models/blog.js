const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
    title:{
        type :String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    coverImageUrl:{
        type:String,
        required:false,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
},{timestamps:true});

const Blog = model('blog',blogSchema);

module.exports=Blog;
