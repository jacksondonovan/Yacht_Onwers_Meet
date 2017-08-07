const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

var profile = require('./routes/profile')

app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/profile',profile)

app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(port,(req,res)=>{
  console.log('listening on port ' + port)
})

module.exports = app;
