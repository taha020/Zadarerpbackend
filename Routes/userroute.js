let express=require("express")
let router=express.Router()
let usermodel=require("../Models/usersmode")

// get admin detials
router.get("/admin",async(req,res)=>{

    try {
        
        let admins = await usermodel.find({ role: 'admin'}).exec()
        res.send(admins)

    } catch (error) {
        res.send(error)
    }

})

// get delivery boys detials

router.get("/db",async(req,res)=>{

    try {
        
        let deliveryboys = await usermodel.find({ role: 'DB'}).exec()
        res.send(deliveryboys)

    } catch (error) {
        res.send(error)
    }

})

//post user
router.post("/",async(req,res)=>{

    try {
            
        let savedb=new usermodel({
            username:req.body.username,
            password:req.body.password,
            role:req.body.role
        })

        let a1=await savedb.save()
        res.send(a1)
     
    } catch (error) {
        res.send(error)
    }

})

module.exports=router