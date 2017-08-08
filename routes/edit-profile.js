const express = require('express')
const router = express.Router()
const linkQuery = require('../db/linkQuery')

//router mounted. /edit-profile ==> /

router.post('/edited',(req,res)=>{
  linkQuery.updateUser(req.body).then((data)=>{
    res.redirect('/profile/' + req.body.username)
  })
})

router.get('/:username',(req,res)=>{
  linkQuery.getUsers().where('username',req.params.username).first().then((data)=>{
    res.render('edit-profile',{details:data})
  })
})

router.get('/delete-user/:username',(req,res)=>{
  linkQuery.deleteUser(req.params.username).then(()=>{
    res.redirect('/')
  })
})

module.exports = router;
