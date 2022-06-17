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
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    
    datepurchased:{
        type:String,
        required:true
    },
    expiryalert:{
        type:Number,
        required:true
    },
    emptyalert:{
        type:Number,
        required:true
    },
    expierydate:{
        type:String,
        required:true
    }
    


})

module.exports=mongoose.model("meterialmodel",meterialschema)