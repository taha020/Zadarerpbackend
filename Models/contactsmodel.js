let mongoose=require("mongoose")

let contactschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model("contactsmodel",contactschema)