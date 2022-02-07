const express= require("express");
const mongoose = require('mongoose');
const router=require('./router/index')
const app=express();
const port=4567;
const hostname='localhost';
const serverdb='mongodb+srv://gaganraj:RaNjIt#45@cluster0.ddaly.mongodb.net/Zomato?retryWrites=true&w=majority';

app.use(express.json());
app.use('/',router);
mongoose.connect(serverdb,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

