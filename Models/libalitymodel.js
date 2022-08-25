let mongoose=require("mongoose")

let Libalityschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },        
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    }    
})


module.exports=mongoose.model("libalitymodel",Libalityschema)