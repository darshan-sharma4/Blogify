const {Schema,model} = require('mongoose');
const { schema } = require('./blog');

const commentSchema = new Schema({
    content:{
        type:String,
        require:true
    },
    blogID:{
        type:Schema.Types.ObjectId,
        ref:"blog",
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },

},{timestamps:true});

const Comment = model('comment',commentSchema);

module.exports={
    Comment,
}