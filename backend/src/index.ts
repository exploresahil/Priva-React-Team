//*------------> imports
import express from "express";
import CookieParser from "cookie-parser"
import {adminRouter,paymentRouter,serviceRouter,userRouter} from "./Routers"



//*------------> configures
const app = express();
app.use(express.json());
app.use(CookieParser())



//*-----------> Routers 
app.use('/user',userRouter)
app.use('/service',serviceRouter)
app.use('/payment',paymentRouter)
app.use('/admin',adminRouter)



//*----------> Server Ping Pog
app.get('/ping',(req,res)=>{
    res.send({'pog':'ok'})
})



//*-------> Server start 
app.listen(8080,()=>console.log(`server start on http://localhost:8080`))