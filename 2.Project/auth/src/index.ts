import express from "express";

const app = express();

app.get('/api/users/currentuser',(req,res) =>{
    res.send("Hi there !!")
})

app.listen(6001,() => console.log('Auth: Listen on port 6001 🚀'));
