let express=require("express")
const { append } = require("express/lib/response")
let router=express.Router()
let productmodel=require("../Models/productmodel")


//---Get

//get product names

router.get("/productnames",async(req,res)=>{
   
    try {
        let products=await productmodel.find({}, {
            name: 1
          });
 

        res.send(products)    
     } catch (error) {
        res.send(error)
    }
})


// get all
router.get("/",async(req,res)=>{
   
    try {
        let products=await productmodel.find()
        res.send(products)    
     } catch (error) {
        res.send(error)
    }
})

//get cetagories
router.get("/cets",async(req,res)=>{
   
    try {
        let products=await productmodel.distinct('cetagory')
        res.send(products)
           
     } catch (error) {
        res.send(error)
    }

})


//get by id

router.get("/:id",async(req,res)=>{
   
    try {
        let productbyit=await productmodel.findById(req.params.id)
        res.send(productbyit)    
     } catch (error) {
        res.send(error)
    }
})



//-----Post


router.post("/",async(req,res)=>{
  
          
        let newproduct=new productmodel({
            name:req.body.name,
            price:req.body.price,
            Discription:req.body.Discription,
            cetagory:req.body.cetagory
        })

        let a3=await newproduct.save()
        res.send(a3)
  
})


//-------Delete


router.delete("/:id",async(req,res)=>{

    try {
        let deleteone=await productmodel.deleteOne({_id:req.params.id})
        res.send(deleteone)
    } catch (error) {
        res.send(error)
    }

})

module.exports=router
