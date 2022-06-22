let express=require("express")
let router=express.Router()
let discountmodel=require("../Models/discountmodel")

//get all
router.get("/",async(req,res)=>{
    try {
        
        let discounts=await discountmodel.find();
        res.send(discounts)

    } catch (error) {
        res.send(error)
    }
})

//post Discount
router.post("/",async(req,res)=>{
    try {
        
      let newdiscount=new discountmodel({
        productname:req.body.productname,
        description:req.body.description,
        discount:req.body.discount, 
      })

      let a1=await newdiscount.save()
      res.send(a1)

    } catch (error) {
        res.send(error)
    }
})

//Delete an Discount
router.delete("/:id",async(req,res)=>{
    try {
        
        let deletediscounts=await discountmodel.findOneAndDelete({_id:req.params.id});
        res.send(deletediscounts)

    } catch (error) {
        res.send(error)
    }
})

module.exports=router
