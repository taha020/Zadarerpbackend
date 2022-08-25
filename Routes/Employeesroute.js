let express=require("express")
let router=express.Router()
let converter = require("json-2-csv");
let empmodel=require("../Models/Employeesmodel")


// Export Data

router.get('/export', async(req,res) =>{
    try {

        let datatoexport=await empmodel.find()
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

//validate employees
router.get("/check/:id",async(req,res)=>{
    try {
        
        let emps=await empmodel.findById({_id:req.params.id});
        if(emps.length=1)
        {
            res.send("Yes")
        }
        
    } catch (error) {
        res.send("No")
    }
})


//Get all employees Data
router.get("/",async(req,res)=>{
    try {
        
        let emps=await empmodel.find();
        res.send(emps)

    } catch (error) {
        res.send(error)
    }
})

//post Employee
router.post("/",async(req,res)=>{
    try {      
      let newemployee=new empmodel({
        name:req.body.name,
        designation:req.body.designation,
        address:req.body.address,
        sallary:req.body.sallary,
        number:req.body.number
      })
      let a1=await newemployee.save()
      res.send(a1)
    } catch (error) {
        res.send(error)
    }
})

router.patch("/:id",async(req,res)=>{
    try {
      let patchemp=await empmodel.findById(req.params.id)
      Object.assign(patchemp,req.body)
      patchemp.save()
      res.send(patchemp)  
    } catch (error) {
        res.send(error)
    } 
   })

   router.get("/delete/:id",async(req,res)=>{

    try {    
        let deleteemp=await empmodel.findOneAndDelete({_id:req.params.id})
        res.send(deleteemp)
    } catch (error) {
     res.send(error)   
    }
})


module.exports=router