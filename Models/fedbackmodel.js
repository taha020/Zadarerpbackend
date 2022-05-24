const mongoose=require('mongoose')

const feedbackschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

})

module.exports=mongoose.model("fedbackmodel",feedbackschema)