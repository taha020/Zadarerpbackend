const mongoose=require("mongoose")


let meterialschema=new mongoose.Schema({

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
    datepurchased:{
        type:Date,
        required:true
    },
    expierydate:{
        type:Date,
        required:true
    }
    


})

module.exports=mongoose.model("meterialmodel",meterialschema)