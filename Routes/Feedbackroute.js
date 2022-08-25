const express=require("express")
const { route } = require("express/lib/application")
const app = express()
const router=express.Router()
const fbmodel=require("../Models/fedbackmodel")

let subscribermodel=require("../Models/subscribermodel")


router.get('/monthratio', async(req,res) =>{

    try {
         
   
        const feedbacks=await fbmodel.find()
       
        let prev=0
        let curr=0

        let current = new Date();

        current.setMonth(current.getMonth()-1);
        let previousMonth = current.toLocaleString('default', { month: 'long' });
        
        current.setMonth(current.getMonth()+1);
        current = current.toLocaleString('default', { month: 'long' });
       


       feedbacks.forEach(element => {
          let d= element.date.toString().split(' ')
          
           if(d[1]==current){curr++}
           else if(d[1]==previousMonth.slice(0,3)){prev++}
       });
       let count=[curr,prev]
      res.send(count)
       

   
       
    } catch (err) {
        res.send(err)
    }
   

})



//get positive feedbacks

router.get('/totalpositive', async(req,res) =>{

    try {

        const feedbacks=await fbmodel.find({rating:{ $gte: 4}})
        res.send(feedbacks)
    } catch (err) {
        res.send(err)
    }
   

})



router.get('/positveratio', async(req,res) =>{

    try {

        const feedbacksposiive=await fbmodel.find({rating:{ $gte: 4}})
        const feedbacknagitive= await fbmodel.find({rating:{ $lte: 3}})
        let count=[feedbacksposiive.length,feedbacknagitive.length]
        res.send(count)
    } catch (err) {
        res.send(err)
    }
   

})

//route for getting all feedbacks
router.get('/', async(req,res) =>{

    try {

        const feedbacks=await fbmodel.find()
        res.send(feedbacks)
    } catch (err) {
        res.send(err)
    }
   

})

//route for saving feedback

router.post('/',async(req,res)=>{
    try {
        let newdate= new Date().toISOString().slice(0, 10)
      
        let feedbacknew=new fbmodel({

            name:req.body.name,
            email:req.body.email,
            rating:req.body.rating,
            feedback:req.body.feedback,
            date:newdate

        })

        const a1=await feedbacknew.save()

        let newsubscriber= new subscribermodel({
            name:req.body.name,
            email:req.body.email
        })
        let a2=await newsubscriber.save()

        res.send(a1)

    } catch (err) {
        res.send(err)
    }
})


//route for get by id Feedback

router.get('/:id',async(req,res)=>{
    try {
      let feedbackbyid=await fbmodel.findById(req.params.id)
      res.send(feedbackbyid)
    } catch (err) {
        res.send(err)
    }
})

//delete by id

router.delete('/:id',async(req,res)=>{
    try {
      let feedbackdeletebyid=await fbmodel.deleteOne({_id:req.params.id})
      res.send(feedbackdeletebyid)
    } catch (err) {
        res.send(err)
    }
})


module.exports=router