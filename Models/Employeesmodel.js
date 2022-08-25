let mongoose=require("mongoose")

let employemodel=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    sallary:{
        type:Number,
        required:true
    },
    number:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model("Employeesmodel",employemodel)