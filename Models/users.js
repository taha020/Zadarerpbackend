let mongoose=require("mongoose")


let userschema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


})

module.exports=mongoose.model("users.js",userschema)