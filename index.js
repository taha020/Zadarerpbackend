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

//--for user router
let usersrouter=require("./Routes/userroute")
app.use("/users",usersrouter)

//------------port configuration

app.listen(port,()=>{
    console.log("listening on port : "+port)
})
