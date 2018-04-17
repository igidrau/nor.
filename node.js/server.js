var express = require('express');
var bodyParser = require('body-parser');
var discord = require('./functions/discord.js');


var app = express();

//START APP
app.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())

.use(express.static(__dirname+'/public'))

.set('view engine', 'ejs')

.get('/*', function(req, res) {
    //discord.login;
    
    var status = '';
    switch (discord.status){
        case 0:
            status = 'READY';
            break;
        case 1:
            status = 'CONNECTING';
            break;
        case 2:
            status = 'RECONNECTING';
            break;
        case 3:
            status = 'IDLE';
            break;
        case 4:
            status = 'NEARLY';
            break;
        case 5:
            status = 'DISCONNECTED';
            break;
        default:
            status = 'ERROR';
    }
    res.render('pages/search', {subText:status});
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


.listen(8080);
//END APP


console.log('Server launched');



//Assigner un identifiant Base64
//var base64 = require('./functions/base64.js');
//
//var id = Math.floor(Math.random() * Math.pow(64,4));
//var id64 = base64.encode(id);
//console.log(id64);
//console.log(base64.decode(id64));




