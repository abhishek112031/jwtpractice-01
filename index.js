const express=require('express');
const jwt=require('jsonwebtoken');
const secretKey="secretKey";

const app=express();

app.post('/login',(req,res)=>{

    const user={
        name:"abhishek",
        userId:12,
        age:31,
        email:"abhishek.112031@gmail.com"
    }

    jwt.sign({user},secretKey,{expiresIn:'60s'},(err,token)=>{
        res.json(token);
    });

});
app.listen(5000,()=>{
    console.log("this app is running on port : 5000")
});