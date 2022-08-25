let express=require("express")
let router=express.Router()
let converter = require("json-2-csv");
let libilitymodel=require("../Models/libalitymodel")

//Export

router.get('/export', async(req,res) =>{
    try {

        let datatoexport=await libilitymodel.find()
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


//Get all
router.get('/', async(req,res) =>{

    try {

        let alllibality=await libilitymodel.find()
        res.send(alllibality)

    } catch (err) {
        res.send(err)
    }
   
})

router.post('/',async(req,res)=>{
    try {
        let newdate= new Date().toISOString().slice(0, 10)
        let newlibility=new libilitymodel({
            name:req.body.name,
            description:req.body.description,
            amount:req.body.amount,
            date:newdate
        })
        const a1=await newlibility.save()
        res.send(a1)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async(req,res) =>{

    try {

        let alllibality=await libilitymodel.findOneAndDelete({_id:req.params.id})
        res.send(alllibality)

    } catch (err) {
        res.send(err)
    }
   
})

module.exports=router
