const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())

app.get('/',(req,res)=>{
 res.send('hamara homepage')
});

app.get('/services',(req,res)=>{
    res.send('oi oi oi mate mate')
})
app.get('/players',(req,res)=>{
    const players=['dhoni,sachin,ronaldo']
    res.send(players);
})

app.post('/login',(req,res)=>{
  var username=req.body.username
  var password=req.body.password

  if(username=='javascript' && password=='satkar'){
      res.send('login successfull');
  }
  else{
      res.send('login failed')
  }

})


app.listen(5000, () => console.log('Server is started on http://localhost:8080'));



// const http=require('http')

// http.createServer(function(req,res){
//  res.end('hello my name is khan')
// }).listen(5000)