const express=require("express")
const router=express.Router()

const websitemodelschema=require("../Models/websitemodel")

router.get("/",async(req,res)=>{
   
    try {
        let websitedata=await websitemodelschema.find()
       
        res.send(websitedata)
    } catch (error) {
        res.send(error)
    }

})

//route for posting feedback

router.post('/',async(req,res)=>{
    try {
       let newwebsitedata=new websitemodelschema({
        websitename:req.body.websitename,
        address:req.body.address,
        aboutstonefire:req.body.websitename,

        email:req.body.email,
        phonenumber:req.body.phonenumber,
        
        facebooklink:req.body.facebooklink,
        twitterlink:req.body.twitterlink,
        youtubepagelink:req.body.youtubepagelink,
        instagramlink:req.body.instagramlink,

        footerupperheading:req.body.footerupperheading,

        sliderheading1:req.body.sliderheading1,
        sliderheading2:req.body.sliderheading2,


        object1heading:req.body.object1heading,
        object1message:req.body.object1message,
        
        object2heading:req.body.object2heading,
        object2message:req.body.object2message,

        object3heading:req.body.object3heading,
        object3message:req.body.object3message,

        object4heading:req.body.object4heading,
        object4message:req.body.object4message,

        cetagoriesheading:req.body.cetagoriesheading,
        cetagoriessubheading:req.body.cetagoriessubheading,

        testimonialheading:req.body.testimonialheading,
        testimonialsubheading:req.body.testimonialsubheading,

        aboutsliderheading1:req.body.aboutsliderheading1,
        aboutsliderheading2:req.body.aboutsliderheading2,


        section1heading:req.body.section1heading,
        section1text:req.body.section1text,

        section2heading:req.body.section2heading,
        section2text:req.body.section2text,

        section3heading:req.body.section3heading,
        section3text:req.body.section3text,

        section4heading:req.body.section4heading,
        section4text:req.body.section4text,


        rightsectionheading:req.body.rightsectionheading,
        rightsectionmessage:req.body.rightsectionmessage,


        promotionssliderheading:req.body.promotionssliderheading,
        promotionsslidermessage:req.body.promotionsslidermessage,

        promotionsdealheading:req.body.promotionsdealheading,
        promotionsdealmessage:req.body.promotionsdealmessage,

        promotionsflatheading:req.body.promotionsflatheading,
        promotionsflatlmessage:req.body.promotionsflatlmessage,

        

       })

       let a1=await newwebsitedata.save()
       res.send(a1)
    } catch (err) {
        res.send(err)
    }
})


router.patch("/:id",async(req,res)=>{
 try {
   
   let data=await websitemodelschema.findById(req.params.id)
   Object.assign(data,req.body)
   data.save()
   res.send(data)
   
 } catch (error) {
     res.send(error)
 }
  
})

module.exports=router