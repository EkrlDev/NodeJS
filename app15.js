let express = require('express');
let bodyParser = require('body-parser');//we use this as parser for handling POST requests

let app = express();

let urlencodedParser = bodyParser.urlencoded({extended:false})//this is a middleware for our post handler for the /contact requests it will grab the infos in the form for ex.

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/contact', function(req, res) {
    //console.log(req.query); //prints query string ex(?department=finance&name=Joe)
    res.render('contact', {qs:req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {//infos in the post will be grabbed by "urlencodedParser middleware" and body will be accessible so we can pate them to the "contact-success page" with "data:req.body"
    console.log(req.body); //this will write the submited form into console
    res.render('contact-success', {data: req.body});//we are creating a new view for insisting that the post is successful
});

app.get('/profile/:name', function(req, res) {//Attention to ":"
    
    let data = {age:29, job:'ninja', hobbies: ['eating', 'fighting', 'reading']}
    res.render('profile', {person: req.params.name, data: data});

});

app.listen(3000);
