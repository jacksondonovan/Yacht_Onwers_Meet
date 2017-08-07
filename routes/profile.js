const express = require('express')
const router = express.Router()
const linkQuery = require('../db/linkQuery')

//router mounted. /profile ==> /
router.post('/',(req,res)=>{
  linkQuery.addUser(req.body).then((data)=>{
    res.redirect('/profile/' + req.body.username)
  })
})

router.get('/:username',(req,res)=>{
  res.render('profile')
})

module.exports = router;
