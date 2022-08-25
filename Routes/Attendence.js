let express=require("express")
let router=express.Router()

let attendencemodel=require("../Models/attenencemode")

router.get("/deletesheet",async(req,res)=>{
    try {
       
        let empattendencesheet=await attendencemodel.deleteMany({})
        res.send("Deleted")
        console.log("Deleted")

    } catch (error) {
        res.send(error)
    }
})


router.get("/",async(req,res)=>{
    try {
        let empattendencesheet=await attendencemodel.find()
        res.send(empattendencesheet)
    } catch (error) {
        res.send(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        let empattendencesheet=await attendencemodel.find()
        res.send(empattendencesheet)
    } catch (error) {
        res.send(error)
    }
})


router.post("/generatesheet",async(req,res)=>{

    try {

       let generatesheet=new attendencemodel({
        name:req.body.name,
        Designation:req.body.Designation,
        Month:req.body.Month,
        attendence:req.body.attendence
       })

       let a1=await generatesheet.save()
       res.send(a1)
        
    } catch (error) {
        res.send(error)
    }

})


router.patch("/:id",async(req,res)=>{
    try {
      
      let patchattendence=await attendencemodel.findById(req.params.id)
      Object.assign(patchattendence,req.body)
      patchattendence.save()
      res.send(patchattendence)
      
    } catch (error) {
        res.send(error)
    }
     
})


module.exports=router