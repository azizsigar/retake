const express = require('express');
const app = express();
const rout= require('./route')
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://aziz:1234@aziz.fjez7sn.mongodb.net/?retryWrites=true&w=majority')
.then(()=> {console.log(`Db is coneted`)})
.catch(err => console.log(err))

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.set('view engine','ejs')

app.use(express.static('public'))

app.use(rout);


let port= 3000
app.listen(port, (req,res)=> {
  
    console.log('connectedport');
})

