const express=require('express')
const app=express()


app.get('/',(req,res)=>{
 res.send('hamara homepage')
});

app.get('/services',(req,res)=>{
    res.send('oi oi oi mate mate')
})



app.listen(5000, () => console.log('Server is started on http://localhost:8080'));



// const http=require('http')

// http.createServer(function(req,res){
//  res.end('hello my name is khan')
// }).listen(5000)