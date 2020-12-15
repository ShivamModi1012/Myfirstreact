const path = require('path');
const express = require('express');
const app = express();

console.log(__filename);

console.log(path.join(__filename,"index.html"));

const staticPath = path.join(__filename,"index.html");


app.use(express.static(staticPath));
app.listen(4000,function(){
    console.log("Hello")
})