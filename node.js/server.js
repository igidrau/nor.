var express = require('express');
var bodyParser = require('body-parser');  



var app = express();




app.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())

.use(express.static(__dirname+'/public'))

.set('view engine', 'ejs')

.get('/*', function(req, res) {
    
    res.render('pages/index', {theme: entry, subtext:entry});
    //let entry = req.query.q;
    //var sqlite3 = require('sqlite3').verbose();
    //var db = new sqlite3.Database('db.db');
    //db.serialize(function() {
    //    
    //    db.each("SELECT name, id FROM entries", function(err, row) {
    //      if(entry == row.name){
    //            console.log(row.name + ": " + row.id);
    //            
    //      } else {
    //        res.render('pages/index', {subtext:''});
    //      }
    //    });
    //   
    //});
    //db.close();
})
.get('/:page', function(req, res) {
    res.render('pages/index', {subtext: 'Page' + req.params.page});
})

.listen(8080);
console.log('Server launched');