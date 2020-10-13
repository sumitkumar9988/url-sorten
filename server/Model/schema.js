 const mongoose=require('mongoose');
 const schema=mongoose.Schema;
 const URLschema=new mongoose.Schema({
     _id:{type:String},
     url:{
         type:'string',
         require:[true,'Url is a required for sorten']
     },
     hash: {
        type:'string',
     },Data:{
         type:Date,
         default:Date.now(),
     }
 })

 module.exports =URL=mongoose.model('URL',URLschema);