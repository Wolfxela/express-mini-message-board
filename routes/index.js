const express = require('express');
const router = express.Router();
const messages = [
  {
    content: "hello there!",
    user: "sam",
    date: new Date()
  },
  {
    content: "ama fof?",
    user: "bobby",
    date: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

router.get("/new",function(req,res,next ){
  res.render('form')
})
router.post('/new',function(req,res,next){
  messages.push({content: req.body.message_input, user: req.body.user_input, date: new Date()})
  res.redirect('/')
})

module.exports = router;
