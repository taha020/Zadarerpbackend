let express = require ("express")
let router = express.Router()

// importing models
let meterialmodel = require("../Models/meterialmodel")
let libilitymodel = require("../Models/libalitymodel")
let assetmodel = require("../Models/assetmodel")
let salesmode = require("../Models/salesmodel")

router.get("/",async(req,res)=>{

    let month = req.query.month
    let year = new Date().getFullYear()+"-"+month
    let meterial = await meterialmodel.find()
    let libility = await libilitymodel.find()
    let asset = await assetmodel.find()
    let sales = await salesmode.find()

    try {

        let total = 0
        let totalsale = 0
        let expenselist=[]
        meterial.forEach(e=>{

            if( e.datepurchased.slice(0, 7) == year )
            {
            let item ={ name:e.name , description:e.discription, total: e.price, type: "meterial", date:e.datepurchased  }
            total = total + e.price            
            expenselist.push(item)
            }

        })
        libility.forEach(e=>{

            if( e.date.slice(0, 7) == year )
            {
            let item ={ name:e.name , description:e.description, total: e.amount , type: "libility" , date:e.date  }
            total = total + e.amount    
            expenselist.push(item)
            }    

        })
        asset.forEach(e=>{

            if( e.date.slice(0, 7) == year )
            {
            let item ={ name:e.name , description:e.discription, total: e.price, type: "asset", date:e.date  }
            total = total +  e.price 
            expenselist.push(item)
            }    

        })

        sales.forEach(e=>{
              
            if( e.date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}).toString().slice(0,2) == month  )
            {
            if(e.totalprice!=undefined)
            {
                totalsale += e.totalprice
            }
            }
            
        })

        
    
        let expensesheet = {
        
            totalexpense: total,
            totalsale:    totalsale,
            expenses:     expenselist
            
        }

        console.log("Generating Sheet")
        res.send(expensesheet)     
        
    } catch (error) {
        
    }

})

module.exports=router