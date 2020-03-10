let express = require('express');

let app = express();//we create an express app so we access all different methods on express

app.get('/', function(req, res) {
    res.send('this is home page')
})
app.get('/contact', function(req, res) {
    res.send('this is contact page')
})

app.get('/profile/:id', function(req, res) {//Attention to ":"
    res.send('You requested a profile with the id of: ' + req.params.id);//we accessed requested thing dynamically. --> using route params
})

app.listen(3000);
