var express = require('express');
var router = express.Router();
// const database=require('../models/database')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/input', function(req, res, next) {
  res.render('index');
});


// router.post('/input',async function(req, res, next) {
//   try {
//     await database.create({
//       name:req.body.name,
//       email:req.body.email,
//       message:req.body.message,
//     },
    
//     )
//     database.save();
//     res.redirect('/')
    
//   } catch (error) {
//     res.send(error)
//   }
  
// });

module.exports = router;
