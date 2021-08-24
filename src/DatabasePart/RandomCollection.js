const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const newSchema= new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name:{type:String},
    Location:{type:String}
},{collection:'RandomCollection'})

module.exports=mongoose.model('RandomCollection',newSchema)