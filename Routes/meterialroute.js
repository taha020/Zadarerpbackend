const express=require('express')
const router=express.Router()

let meterialmodel=require("../Models/meterialmodel")

router.get("/",async(req,res)=>{

    try {
        
        let getmeterial=await meterialmodel.find()
        res.send(getmeterial)

    } catch (error) {
     res.send(error)   
    }

})

//get by id

router.get("/:id",async(req,res)=>{

    try {
        
        let getmeterial=await meterialmodel.findById(req.params.id)
        res.send(getmeterial)

    } catch (error) {
     res.send(error)   
    }

})

//posting data

router.post("/",async(req,res)=>{

    try {
        let newdate= new Date().toISOString().slice(0, 10)
      let newmeterial= new meterialmodel({
          name:req.body.name,
          discription:req.body.discription,
          vendor:req.body.vendor,
          price:req.body.price,
          quantity:req.body.quantity,  
          datedatepurchased:newdate,
          expierydate:req.body.expierydate
      })

      let a1=await newmeterial.save()
      res.send(a1)
    } catch (error) {
     res.send(error)   
    }

})

//delete one


router.delete("/:id",async(req,res)=>{

    try {
        
        let deletemeterial=await meterialmodel.findOneAndDelete({_id:req.params.id})
        res.send(deletemeterial)

    } catch (error) {
     res.send(error)   
    }

})

router.patch("/:id",async(req,res)=>{
    try {
      
      let patchmeterial=await meterialmodel.findById(req.params.id)
      Object.assign(patchmeterial,req.body)
      patchmeterial.save()
      res.send(patchmeterial)
      
    } catch (error) {
        res.send(error)
    }
     
   })
