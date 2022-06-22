let mongoose=require("mongoose")

let popupschema=new mongoose.Schema({

    heading:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("popuppromotionsmodel",popupschema)