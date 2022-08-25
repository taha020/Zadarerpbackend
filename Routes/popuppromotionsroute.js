let express=require("express")
let router=express.Router()

let popuppromotionsmodel=require("../Models/popuppromotionsmodel")

router.get("/",async(req,res)=>{
    try {
        
            let popups=await popuppromotionsmodel.find()
            res.send(popups)

    } catch (error) {
        res.send(error)
    }
})



router.post("/",async(req,res)=>{
    try {
        
        let newpopup=new popuppromotionsmodel({
            heading:req.body.heading,
            message:req.body.message
        })
        let a1= await newpopup.save()
        res.send("True")

    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        
        let deletepopup=await popuppromotionsmodel.deleteOne({_id:req.params.id})
        res.send(deletepopup)

    } catch (error) {
        res.send(error)
    }
})

module.exports=router