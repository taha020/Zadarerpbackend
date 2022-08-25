let mongoose=require("mongoose")


let autoemailsschema=new mongoose.Schema({

    heading:{
        required:true,
        type:String
    },
    message:{
        required:true,
        type:String
    }

})

module.exports=mongoose.model("autoemailsmodel",autoemailsschema)