const express=require("express")
const { json } = require("express/lib/response")
const app=express()
const mongoose=require("mongoose")
const port=4000
const url="mongodb://localhost/zadarerpbackend"
const cors = require('cors');

app.use(cors());


//-------db connection

mongoose.connect(url,{useNewUrlParser:true})
let con=mongoose.connection

con.on("open",()=>{
    console.log("Database connected")
})

app.use(express.json())


//----------Routing



//---for Feedbacks
let fbrouter=require("./Routes/Feedbackroute")
app.use("/feedback",fbrouter)

//---for leads
let ldrouetr=require("./Routes/leadssroute")
app.use("/leads",ldrouetr)

//---For sales
let salesrouter=require("./Routes/salesroute")
app.use("/sales",salesrouter)

//---for products
let productsrouter=require("./Routes/productrouter")
app.use("/products",productsrouter)

//---for websitedata
let websiterouter=require("./Routes/websitedataroute")
app.use("/websitedata",websiterouter)

//--for subscriber
let subscriberrouter=require("./Routes/subscriberoute")
app.use("/subscriber",subscriberrouter)

//--for asset router
let assetrouter=require("./Routes/Assetroute")
app.use("/asset",assetrouter)

//--for Meterial router
let meterialrouter=require("./Routes/meterialroute")
app.use("/meterial",meterialrouter)

//--for voucher
let voucherrouter=require("./Routes/voucherroute")
app.use("/voucher",voucherrouter)

//--for Discounts
let discountroute=require("./Routes/discountroute")
app.use("/discount",discountroute)

//--For pop-up promotions
let popups=require("./Routes/popuppromotionsroute")
app.use("/popups",popups)

//--For Auto emails
let autoemails=require("./Routes/autoemailrouteroute")
app.use("/autoemails",autoemails)

//--For Employees Data
let emp=require("./Routes/Employeesroute")
app.use("/employees",emp)

//--For Employees Attendence
let empattendence=require("./Routes/Attendence")
app.use("/attendence",empattendence)

//--For Libility 
let libilityroute=require("./Routes/libilityroute")
app.use("/libility",libilityroute)

//--For Contacts 
let contactroute=require("./Routes/contactroute")
app.use("/contact",contactroute)

//--For Contacts 
let users=require("./Routes/usersroute")
app.use("/user",users)

//--For Expense 
let expense=require("./Routes/Expenshesheetroute")
app.use("/expensesheet",expense)

//------------port configuration

app.listen(port,()=>{
    console.log("listening on port : "+port)
})
