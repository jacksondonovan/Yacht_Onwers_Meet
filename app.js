const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const bodyParser = require('body-parser')

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.render('index')
})


app.listen(port,(req,res)=>{
  console.log('listening on port ' + port)
})
