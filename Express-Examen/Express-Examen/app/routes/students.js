var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('exam')
})
/* GET ALL students */
router.get('/', (req, res) => {
    db.collection('students').sort({name: 1}).find().toArray((err, result) => {
      if (err) return
      res.render('list.ejs', { products: result })
    })
  })
/* SHOW ADD students FORM */
router.get('/add', (req, res) => {
    res.render('add.ejs', {})
 })
 
 /* ADD students TO DB */
 router.post('/add', (req, res) => {
  let query = {naam: req.body.naam, birthdate: req.body.birthdate, major: req.body.major};
   db.collection('students').find(query).toArray(function(err, result) {
    if (err) console.log(err)
     if (result == ''){
      datum = getDatum();
      db.collection('students').insertOne({query}, (err, result) => {
        if (err) return console.log(err)
         res.redirect('/list.ejs')
      })
    }
    else{
      res.render('exists.ejs');
    }


   })
 })
 module.exports = router;