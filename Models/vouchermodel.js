let mongoose=require("mongoose")

let voucherschema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    sendersemail:{
        type:String,
        required:false
    },
    message:{
        type:String,
        required:false
    }

})

module.exports=mongoose.model("vouchermodel",voucherschema)