let express=require("express")
let router=express.Router()
let converter = require("json-2-csv");

let contactmodel=require("../Models/contactsmodel")

router.get('/export', async(req,res) =>{
    try {

        let contacts=await contactmodel.find()
        let data=JSON.parse(JSON.stringify(contacts));
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

router.get('/', async(req,res) =>{
    try {
        let contacts=await contactmodel.find()
        res.send(contacts)

    } catch (err) {
        res.send(err)
    }   
})

router.post('/',async(req,res)=>{
    try {
        let newcontact=new contactmodel({
            name:req.body.name,
            description:req.body.description,
            number:req.body.number
        })
        const a1=await newcontact.save()
        res.send(a1)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async(req,res) =>{
    try {
        let deletecontact=await contactmodel.deleteOne({_id:req.params.id})
        res.send(deletecontact)
    } catch (err) {
        res.send(err)
    }
})

module.exports=router