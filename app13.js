let express = require('express');

let app = express();

//In this example we see sending html file as a response and template engine "ejs"
//we are setting "ejs as a view engine"

app.set('view engine', 'ejs');
//by default when we request a view express gonna look at view folder. We gonna create a view folder and a profile.ejs file in it.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res) {//Attention to ":"
    //instead of sendFile we use render method when we send a view
    let data = {age:29, job:'ninja', hobbies: ['eating', 'fighting', 'reading']}
    res.render('profile', {person: req.params.name, data: data});//we gonna use person property at profile.ejs, we gonna embed it with "<%= %>" notationgit

});

app.listen(3000);
