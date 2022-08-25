let express=require("express")
const { config } = require("nodemon")
let router=express.Router()
let converter = require("json-2-csv");
let salesmodel=require("../Models/salesmodel")
let subscribermodel=require("../Models/subscribermodel")


//------Routing


router.get("/deleteall",async(req,res)=>{
    try {
        
           let sales = await salesmodel.find()
           for (let index = 0; index < sales.length; index++) {

            let deletesale = await salesmodel.findOneAndDelete({_id:sales[index]._id})

           }
           res.send("Deleted")

    } catch (error) {
        res.send(error)
    }
})

// Export Data

router.get('/export', async(req,res) =>{
    try {

        let datatoexport=await salesmodel.find()
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


//get takeaway pendings orders


router.get('/takeaway/pending',async(req,res)=>{
    try {
        let pendingdineine=await salesmodel.find({cordertype:"Take Away",status:"pending"})
        res.send(pendingdineine)
       
    } catch (error) {
        res.send(error)
    }
})

//get Dinein pendings orders


router.get('/dinein/pending',async(req,res)=>{
    try {
        let pendingdineine=await salesmodel.find({cordertype:/Dine in/i, status:"pending"})
     
        res.send(pendingdineine)
       
    } catch (error) {
        res.send(error)
    }
})


//get Delivery pendings orders


router.get('/delivery/pending',async(req,res)=>{
    try {
        let pendingdineine=await salesmodel.find({cordertype:/Delivery/i,status:/pending/i})
        res.send(pendingdineine)
       
    } catch (error) {
        res.send(error)
    }
})






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
   
    let date= new Date().toISOString().slice(0, 10)

    try {
        let newsale=new salesmodel({
            cname:req.body.cname,
            cemail:req.body.cemail,
            cordertype:req.body.cordertype,
            order:req.body.order,
            date:date,
            totalprice:req.body.totalprice,
            status:req.body.status,
           
        })

        let a1=await newsale.save()

        let newsubscriber= new subscribermodel({
            name:req.body.cname,
            email:req.body.cemail
        })
        let a2=await newsubscriber.save()

        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})

//Post Take-away order

router.post("/takeaway",async(req,res)=>{
  
    let date= new Date().toISOString().slice(0, 10)
  
    try {

        let newsale=new salesmodel({
            cname:req.body.cname,
            cemail:req.body.cemail,
            cphonenumber:req.body.cphonenumber,
            cordertype:req.body.cordertype,
            order:req.body.order,
            date:date,
            totalprice:req.body.totalprice,
            status:req.body.status,
           
        })

        let a1=await newsale.save()
        let newsubscriber= new subscribermodel({
            name:req.body.cname,
            email:req.body.cemail
        })
        let a2=await newsubscriber.save()
        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})


// post delievery order

router.post("/delivery",async(req,res)=>{
  
    let date= new Date().toISOString().slice(0, 10)

    try {
        let newsale=new salesmodel({
            cname:req.body.cname,
            cemail:req.body.cemail,
            cordertype:req.body.cordertype,
            cphonenumber:req.body.cphonenumber,
            caddress:req.body.caddress,
            order:req.body.order,
            date:date,
            totalprice:req.body.totalprice,
            status:req.body.status,  
        })

        let a1=await newsale.save()
        let newsubscriber= new subscribermodel({
            name:req.body.cname,
            email:req.body.cemail
        })
        let a2=await newsubscriber.save()
        res.send(a1)
    } catch (error) {
        res.send(error)
    }
})



router.patch("/:id",async(req,res)=>{
    try {
      
      let data=await salesmodel.findById(req.params.id)
      if(data.length!=0)
      {
      Object.assign(data,req.body)
      data.save()
      res.send(data)
      }
      else
      {
        res.send("Error")
      }
      
    } catch (error) {
        res.send(error)
    }
     
   })


   router.get("/cancel/:id",async(req,res) =>{
    try {
        let data=await salesmodel.findById({_id:req.params.id})
        if(data.length!=0)
        {
        let deletesale=await salesmodel.findOneAndDelete({_id:req.params.id})    
        res.send("deleted")
        }
      } catch (error) {
          res.send(error)
      }  
     })

module.exports=router
