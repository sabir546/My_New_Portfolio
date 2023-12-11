var express = require('express');
var router = express.Router();
const database=require('../models/database')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/input',async function(req, res, next) {
  await database.create(req.body)
  try {
    res.redirect('/')
    
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
