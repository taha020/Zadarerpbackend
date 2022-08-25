let express=require("express")
let router=express.Router()
let vouchermodel=require("../Models/vouchermodel")
var nodemailer = require('nodemailer');

// Validate voucher

router.get("/validate",async(req,res)=>{
    try {
        
        let code = req.query.code
        let foundcode = await vouchermodel.find({code:code});
        if (foundcode.length!=0)
        {   
            let code = ["found", req.query.price-( req.query.price * ( foundcode[0].discount/100))]
            res.send(code)
        }
        else
        {
            res.send("Not Found")
        }

    } catch (error) {
        res.send(error)
    }
})

//Get simplevoucher

router.get("/simple",async(req,res)=>{
    try {
        
        let vouchers=await vouchermodel.find({sendersemail:{$exists:false}});
        res.send(vouchers)

    } catch (error) {
        res.send(error)
    }
})

//Get special one

router.get("/special",async(req,res)=>{
    try {
        
        let vouchers=await vouchermodel.find({sendersemail:{$exists:true}});
        res.send(vouchers)

    } catch (error) {
        res.send(error)
    }
})


//get all

router.get("/",async(req,res)=>{
    try {
        
        let vouchers=await vouchermodel.find();
        res.send(vouchers)

    } catch (error) {
        res.send(error)
    }
})


//post voucher

router.post("/",async(req,res)=>{
    try {
     
    let flag=false    
    let vouchers=await vouchermodel.find();  
    vouchers.forEach(e=>{
        if(e.code==req.body.code)
        {
            flag=true  
        }
    }) 
if(flag==false )
{
      let newvoucher=new vouchermodel({
        name:req.body.name,
        description:req.body.description,
        code:req.body.code,
        discount:req.body.discount,
        sendersemail:req.body.sendersemail,
        message:req.body.message,
      })

      // Sending Email
      if(req.body.sendersemail!=undefined)
      {
    

        var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
         user: 'alirazaakhtar9@gmail.com',
         pass: 'yawkvujsmksngubp'
        }
        });

        var mailOptions = {
         from: 'alirazaakhtar9@gmail.com',
         to: req.body.sendersemail,
         subject: 'Free voucher For you',
         text: req.body.message
        };

        transporter.sendMail(mailOptions, function(error, info){
         if (error) {
              console.log(error);
         } else {
              console.log('Email sent: ' + info.response);
         }
        });
        
      }  

      let a1=await newvoucher.save()
      res.send(a1)
}
else
{
res.send("Already Added!")
}

    } catch (error) {
        res.send(error)
    }
})


//Delete an an voucher

router.delete("/:id",async(req,res)=>{
    try {
        
        let vouchers=await vouchermodel.findOneAndDelete({_id:req.params.id});
        res.send(vouchers)

    } catch (error) {
        res.send(error)
    }
})

module.exports=router