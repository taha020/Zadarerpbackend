const mongoose=require("mongoose")

let leadsschema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        mess:true
    },
    date:{
        type:Date,
        required:true
    }

})


module.exports=mongoose.model("leadsmodel",leadsschema)