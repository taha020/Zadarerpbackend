const express=require("express")
const app=express()
const router=express.Router()

let subscribermodel=require("../Models/subscribermodel")

router.get("/:id",async(req,res)=>{

    try {
        let subscribers=await subscribermodel.findById(req.params.id)
        res.send(subscribers)
    } catch (error) {
        res.send(error)
    }

})

router.get("/",async(req,res)=>{

    try {
        let subscribers=await subscribermodel.find()
        res.send(subscribers)
    } catch (error) {
        res.send(error)
    }

})

router.post("/",async(req,res)=>{
    try {
        
        let newsubscriber= new subscribermodel({
            name:req.body.name,
            email:req.body.email
        })

        let a1=await newsubscriber.save()
        res.send(a1)

    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        
        let deletesubscriber=await subscribermodel.deleteOne({_id:req.params.id})
        res.send(deletesubscriber)

    } catch (error) {
        res.send(error)
    }
})

module.exports=router