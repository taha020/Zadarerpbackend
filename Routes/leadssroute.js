const express=require("express")
const app=express()
const router=express.Router()
const leadsmodel=require("../Models/leadsmodel")


//------------routing

//get all

router.get('/monthratio', async(req,res) =>{

    try {
         
   
        const leads=await leadsmodel.find()
       
        let prev=0
        let curr=0

        let current = new Date();

        current.setMonth(current.getMonth()-1);
        let previousMonth = current.toLocaleString('default', { month: 'long' });
        
        current.setMonth(current.getMonth()+1);
        current = current.toLocaleString('default', { month: 'long' });
        console.log(current)
       


       leads.forEach(element => {
          let d= element.date.toString().split(' ')
          
           if(d[1]==current.slice(0,3)){curr++ 
            console.log("found")}
           else if(d[1]==previousMonth.slice(0,3)){prev++}
       });
       let count=[curr,prev]
       console.log(count)
      res.send(count)
       

   
       
    } catch (err) {
        res.send(err)
    }
   

})


router.get("/",async(req,res)=>{
   
    try {
        let feedbacks=await leadsmodel.find()
        res.send(feedbacks)    
     } catch (error) {
        res.send(error)
    }
})

//get by id

router.get("/:id",async(req,res)=>{
   
    try {
        let leads=await leadsmodel.findById(req.params.id)
        res.send(leads)    
     } catch (error) {
        res.send(error)
    }
})

//get current month

router.get("/previousmonth",async(req,res)=>{
   
    try {
        let leads=await leadsmodel.find()
        res.send(leads)    
     } catch (error) {
        res.send(error)
    }
})

//get previousmonth


router.get("/thismonth",async(req,res)=>{
   
    try {
        let leads=await leadsmodel.findById()
        res.send(leads)    
     } catch (error) {
        res.send(error)
    }
})


//post leads

router.post("/",async(req,res)=>{
    let newdate= new Date().toISOString().slice(0, 10)
    try {
        let newlead=new leadsmodel({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message,
            date:newdate
        })

        let a1=await newlead.save()
        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})

// delete one

router.delete("/:id",async(req,res)=>{

    try {
        let deletelead=await leadsmodel.deleteOne({_id:req.params.id})
        res.send(deletelead)
    } catch (error) {
        res.send(deletelead)
    }

})


module.exports=router