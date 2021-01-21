const { readFileSync, writeFileSync } = require('fs');
var path = require("path");
const express = require('express');
const app = express();

app.use(function (req, res, next) {
    // Don't increment count for each file served
    if (path.basename(req.url).includes("app.css")) {
        const count = readFileSync('./count.txt', 'utf-8');
        console.log('count ', count);
        const updateCount = parseInt(count) + 1;
        writeFileSync('./count.txt', updateCount);
    }
    next(); // server next file
});

app.use(express.static("public"));


    
    
    



app.listen(5000, () => console.log('http://localhost:5000/'));