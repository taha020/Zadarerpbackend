let express=require("express")
let router=express.Router()
let vouchermodel=require("../Models/vouchermodel")


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
        
      let newvoucher=new vouchermodel({
        name:req.body.name,
        description:req.body.description,
        code:req.body.code,
        discount:req.body.discount,
        sendersemail:req.body.sendersemail,
        message:req.body.message,

      })

      let a1=await newvoucher.save()
      res.send(a1)

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
