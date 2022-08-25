const express=require('express')
const router=express.Router()
let converter = require("json-2-csv");
let meterialmodel=require("../Models/meterialmodel")

// Export Data

router.get('/export', async(req,res) =>{
    try {

        let datatoexport=await meterialmodel.find()
        let data=JSON.parse(JSON.stringify(datatoexport));
        converter.json2csv(data , (err, csv) => {
            if (err) {
                console.log(err);
            }    
            // print CSV string
            res.send(csv);
        });

    } catch (err) {
        res.send(err)
    }   
})


//get all
router.get("/",async(req,res)=>{

    try {
        
        let getmeterial=await meterialmodel.find()
        res.send(getmeterial)

    } catch (error) {
     res.send(error)   
    }

})

// Expired items

router.get("/expiredalerts",async(req,res)=>{
    try {
        
        let allmeterials=await meterialmodel.find()
        let expireditems=[]
        allmeterials.forEach(element => {
            let [y,M,d] = element.expierydate.split(/[- :]/);
            let yourDate =  new Date(y,parseInt(M)-1,parseInt(d)+1).toISOString().slice(0, 10);
            let newdate= new Date().toISOString().slice(0, 10)
            let difference=   Math.floor((new Date(yourDate)-new Date(newdate))/864e5)

            if(difference<=element.expiryalert)
            {
                expireditems.push(element)
            }
        });

       res.send(expireditems)

    } catch (error) {
        res.send(error)
    }
})

//get empty alerts

router.get("/emptyelerts",async(req,res)=>{
    try {

        let allitems=await meterialmodel.find()
        let emptyitems=[]
        allitems.forEach(element=>{
            if(element.quantity<element.emptyalert)
            {
                emptyitems.push(element)
            }
        })
        res.send(emptyitems)
        
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
          price:req.body.price,
          quantity:req.body.quantity,  
          datepurchased:newdate,
          expiryalert: req.body.expiryalert,
          emptyalert: req.body.emptyalert,
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

   module.exports=router