let express = require('express');

let app = express();


app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));// we use this for handling to routing static folders. 
//If we don't do that ejs files can't reachrs the style.css file. It is called middleware

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/contact', function(req, res) {
    res.render('contact', {qs:req.query});
});

app.post('/contact', function(req, res) {//infos in the posm will be pasted by "urlencodedParser middleware"
    res.render('contact', {qs:req.query});
});

app.get('/profile/:name', function(req, res) {//Attention to ":"
    
    let data = {age:29, job:'ninja', hobbies: ['eating', 'fighting', 'reading']}
    res.render('profile', {person: req.params.name, data: data});

});

app.listen(3000);
