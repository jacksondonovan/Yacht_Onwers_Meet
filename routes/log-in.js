const express = require('express')
const router = express.Router()
const linkQuery = require('../db/linkQuery')

//router mounted. /log-in ==> /

router.get('/',(req,res)=>{
  res.render('log-in')
})

router.post('/prof',(req,res)=>{
  linkQuery.getUsers().where('username',req.body.username).first().then((user)=>{
    console.log(user);
    if(!user){
      res.redirect('/')
    } else{
      res.redirect('/profile/' + req.body.username)
    }
  })
})



module.exports = router;
