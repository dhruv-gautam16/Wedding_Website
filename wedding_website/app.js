const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.render('home');
})

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.listen(3000,()=>{
    console.log("Listening to the port 3000 ");
})