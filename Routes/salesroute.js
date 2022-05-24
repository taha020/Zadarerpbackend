let express=require("express")
const { config } = require("nodemon")
let router=express.Router()
let salesmodel=require("../Models/salesmodel")


//------Routing

//get takeaway only

router.get('/takeaway',async(req,res)=>{
    try {
        let dineinesales=await salesmodel.find({cordertype:"Take Away"})
        res.send(dineinesales)
       
    } catch (error) {
        res.send(error)
    }
})

//get Delivery only

router.get('/dinein',async(req,res)=>{
    try {
        let dineinesales=await salesmodel.find({cordertype:/Dine in/i})
        res.send(dineinesales)
       
    } catch (error) {
        res.send(error)
    }
})

//get Take away only

router.get('/delivery',async(req,res)=>{
    try {
        let dineinesales=await salesmodel.find({cordertype:"Delivery"})
        res.send(dineinesales)
       
    } catch (error) {
        res.send(error)
    }
})



//get totalordersdone

router.get("/totalorders",async(req,res)=>{
   
    try {
        let totalorders=await salesmodel.find()
        res.send(""+totalorders.length)
      
        
     } catch (error) {
        res.send(error)
    }
})


//get total customers served

router.get("/totalcustomers",async(req,res)=>{
   
    try {
       
        let totalcustomers=await salesmodel.distinct("cname")
        res.send(""+totalcustomers.length)
        
     } catch (error) {
        res.send(error)
    }
})


//get all
router.get("/",async(req,res)=>{
   
    try {
        let sales=await salesmodel.find()
        res.send(sales)    
     } catch (error) {
        res.send(error)
    }
})

//get by id

router.get("/:id",async(req,res)=>{
   
    try {
        let salesbyid=await salesmodel.findById(req.params.id)
        res.send(salesbyid)    
     } catch (error) {
        res.send(error)
    }
})









//------------




//Post dine in order

router.post("/dinein",async(req,res)=>{
   
    try {
        let newsale=new salesmodel({
            cname:req.body.cname,
            cemail:req.body.cemail,
            cordertype:req.body.cordertype,
            order:req.body.order,
            date:req.body.date,
            status:req.body.status,
           
        })

        let a1=await newsale.save()
        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})

//Post Take-away order

router.post("/takeaway",async(req,res)=>{
  
    try {
        let newsale=new salesmodel({
            cname:req.body.cname,
            cemail:req.body.cemail,
            cphonenumber:req.body.cphonenumber,
            cordertype:req.body.cordertype,
            order:req.body.order,
            date:req.body.date,
            status:req.body.status,
           
        })

        let a1=await newsale.save()
        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})


// post delievery order

router.post("/delivery",async(req,res)=>{
  
    try {
        let newsale=new salesmodel({
            cname:req.body.cname,
            cemail:req.body.cemail,
            cordertype:req.body.cordertype,
            cphonenumber:req.body.cphonenumber,
            caddress:req.body.caddress,
            order:req.body.order,
            date:req.body.date,
            status:req.body.status,  
        })

        let a1=await newsale.save()
        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})


module.exports=router
