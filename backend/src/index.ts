import express from "express";
const app = express();
app.get('/ping',(req,res)=>{
    res.send({'ping':'ok'})
})
app.listen(8080,()=>console.log(`server start on http://localhost:8080`))