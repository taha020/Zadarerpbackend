let mongoose=require("mongoose")

let discountschema=new mongoose.Schema({

    productname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model("discountmodel",discountschema)