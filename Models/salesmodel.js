let mongoose=require("mongoose")


let salesschema=new mongoose.Schema({

    cname:{
        type:String,
        required:true
    },
    cemail:{
        type:String,
        required:true
    },
    cphonenumber:{
        type:Number,
        required:false
    },
    caddress:{
        type:String,
        required:false
    },
    cordertype:{
        type:String,
        required:true
    },
    order:{
        type:Array,
        required:true
    },
    date:{
        type:Date,
        require:true
    },
    totalprice:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        required:false,
    
    }

})


module.exports=mongoose.model("salesmodel",salesschema)