const mongoose=require("mongoose")

let websitemodelschema=new mongoose.Schema({

    //Basic info

    websitename:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    aboutstonefire:{
        type:String,
        required:true
    },
   
//Contact info

email:{
    type:String,
    required:true
},
phonenumber:{
    type:String,
    required:true
},


//social links
facebooklink:{
    type:String,
    required:true
},

twitterlink:{
    type:String,
    required:true
},
youtubepagelink:{
    type:String,
    required:true
},
instagramlink:{
    type:String,
    required:true
},


//------------- >>footer section

footerupperheading:{
    type:String,
    required:true
},


//------------- >> Home page

//slider-section

sliderheading1:{
    type:String,
    required:true
},
sliderheading2:{
    type:String,
    required:true
},

//objectives

object1heading:{
    type:String,
    required:true
},
object1message:{
    type:String,
    required:true
},


object2heading:{
    type:String,
    required:true
},
object2message:{
    type:String,
    required:true
},


object3heading:{
    type:String,
    required:true
},
object3message:{
    type:String,
    required:true
},


object4heading:{
    type:String,
    required:true
},
object4message:{
    type:String,
    required:true
},


//cetagories

cetagoriesheading:{
    type:String,
    required:true
},
cetagoriessubheading:{
    type:String,
    required:true
},

//testimonial

testimonialheading:{
    type:String,
    required:true
},
testimonialsubheading:{
    type:String,
    required:true
},


//------------- >> About page

// about slider

aboutsliderheading1:{
    type:String,
    required:true
},
aboutsliderheading2:{
    type:String,
    required:true
},

//whychooseussection

//leftside

section1heading:{
    type:String,
    required:true
},
section1text:{
    type:String,
    required:true
},

section2heading:{
    type:String,
    required:true
},
section2text:{
    type:String,
    required:true
},

section3heading:{
    type:String,
    required:true
},
section3text:{
    type:String,
    required:true
},

section4heading:{
    type:String,
    required:true
},
section4text:{
    type:String,
    required:true
},


//right side

rightsectionheading:{
    type:String,
    required:true
},
rightsectionmessage:{
    type:String,
    required:true
},


//------------- >> promotions page

//slider

promotionssliderheading:{
    type:String,
    required:true
},

promotionsslidermessage:{
    type:String,
    required:true
},


//deals

promotionsdealheading:{
    type:String,
    required:true
},

promotionsdealmessage:{
    type:String,
    required:true
},
//Flat promotions
promotionsflatheading:{
    type:String,
    required:true
},
promotionsflatlmessage:{
    type:String,
    required:true
},

})

module.exports=mongoose.model("websitemodel",websitemodelschema)