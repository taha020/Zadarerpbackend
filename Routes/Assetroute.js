const express=require("express")
const router=express.Router()
const asssetsmodel=require("../Models/assetmodel")


//get current month and year

router.get("/purshasedstats",async(req,res)=>{

    try {
        let newdate= new Date().toISOString().slice(0, 10)
        let currentyear= newdate.slice(0,4)
        let currentmonth= newdate.slice(0,7)
      
        let thisyearitems=await asssetsmodel.find({date:{'$regex' : `${currentyear}` , '$options' : 'i'}})
        let thismonthitems=await asssetsmodel.find({date:{'$regex' : `${currentmonth}` , '$options' : 'i'}})
             
     let arr=[thisyearitems,thismonthitems]
     res.send(arr)

    } catch (error) {
     res.send(error)   
    }

})

//get current month
router.get("/monthly",async(req,res)=>{

    try {
        let newdate= new Date().toISOString().slice(0, 10)
        let currentmonth= newdate.slice(0,7)
      
        let thismonthitems=await asssetsmodel.find({date:{'$regex' : `${currentmonth}` , '$options' : 'i'}})
             
     let arr=thismonthitems
     res.send(arr)

    } catch (error) {
     res.send(error)   
    }

})

//get current year
router.get("/yearly",async(req,res)=>{

    try {
        let newdate= new Date().toISOString().slice(0, 10)
        let currentyear= newdate.slice(0,4)
     
      
        let thisyearitems=await asssetsmodel.find({date:{'$regex' : `${currentyear}` , '$options' : 'i'}})
      let arr=thisyearitems
     res.send(arr)

    } catch (error) {
     res.send(error)   
    }

})


//get all
router.get("/",async(req,res)=>{

    try {
        
        let getasset=await asssetsmodel.find()
        res.send(getasset)

    } catch (error) {
     res.send(error)   
    }

})

//get by id

router.get("/:id",async(req,res)=>{

    try {
        
        let getasset=await asssetsmodel.findById(req.params.id)
        res.send(getasset)

    } catch (error) {
     res.send(error)   
    }

})

//posting data

router.post("/",async(req,res)=>{

    try {
        let newdate= new Date().toISOString().slice(0, 10)
      let newasset= new asssetsmodel({
          name:req.body.name,
          discription:req.body.discription,
          vendor:req.body.vendor,
          price:req.body.price,
          quantity:req.body.quantity,  
          date:newdate
      })

      let a1=await newasset.save()
      res.send(a1)
    } catch (error) {
     res.send(error)   
    }

})

//delete one


router.delete("/:id",async(req,res)=>{

    try {
        
        let deleteasset=await asssetsmodel.findOneAndDelete({_id:req.params.id})
        res.send(deleteasset)

    } catch (error) {
     res.send(error)   
    }

})

router.patch("/:id",async(req,res)=>{
    try {
      
      let patchasset=await asssetsmodel.findById(req.params.id)
      Object.assign(patchasset,req.body)
      patchasset.save()
      res.send(patchasset)
      
    } catch (error) {
        res.send(error)
    }
     
   })


module.exports=router