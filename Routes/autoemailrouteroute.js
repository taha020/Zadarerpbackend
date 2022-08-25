let express=require("express")
let router=express.Router()
var nodemailer = require('nodemailer');
let popmodel=require("../Models/autoemailsmodel")

router.get("/",async(req,res)=>{

    try {
        
        let allemails=await popmodel.find()
        res.send(allemails)

    } catch (error) {
        res.send(error)
    }

})

router.post("/",async(req,res)=>{

    try {
        
        let newemail=new popmodel({
            heading:req.body.heading,
            message:req.body.message
        })
        
        let subscribermodel = require("../Models/subscribermodel")
        let subs = await subscribermodel.distinct('email')
        
        subs.forEach( email => {

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: 'alirazaakhtar9@gmail.com',
                pass: 'yawkvujsmksngubp'
               }
               });
       
               var mailOptions = {
                from: 'alirazaakhtar9@gmail.com',
                to: email,
                subject: req.body.heading,
                text: req.body.message
               };
       
               transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                     console.log(error);
                } else {
                     console.log('Email sent: ' + info.response);
                }
               });
              
            
        });

        let a1=await newemail.save()
        res.send(a1)

    } catch (error) {
        res.send(error)
    }

})

router.delete("/:id",async(req,res)=>{

    try {
        
        let a1=await popmodel.deleteOne({_id:req.params.id})
        res.send(a1)

    } catch (error) {
        res.send(error)
    }

})


module.exports=router