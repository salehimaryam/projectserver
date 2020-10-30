const path = require('path');
require("./models/index")
const express = require("express");
const app = express();

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, "./views/admin.html"));
});

app.listen (3000);