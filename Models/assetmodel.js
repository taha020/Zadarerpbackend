const mongoose=require("mongoose")


let assetschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    vendor:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("assetmodel",assetschema)