let mongoose=require("mongoose")


let productschema=new mongoose.Schema({

    name:{
        type:String,
        required:false
    },
    price:{
        type: mongoose.Schema.Types.Mixed,
        required:false
    }, 
    Discription:{
        type:String,
        required:false
    },
    cetagory:{
        type:String,
        required:false
    }


})

module.exports=mongoose.model("productmodel",productschema)