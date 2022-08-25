let mongoose=require("mongoose")

let attendenceschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Month:{
        type:Number,
        required:true
    },
    attendence:{
        type:Number,
        required:true
    }
    
})


module.exports=mongoose.model("attenencemode",attendenceschema)