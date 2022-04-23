const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/first_page',(req,res)=>{
    res.render('first_page');
})

app.get('/second_page',(req,res)=>{
    res.render('second_page');
})

app.get('/third_page',(req,res)=>{
    res.render('third_page');
})

app.get('/fourth_page',(req,res)=>{
    res.render('fourth_page');
})

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.listen(3000,()=>{
    console.log("Listening to the port 3000 ");
})