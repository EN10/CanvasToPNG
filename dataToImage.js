var express = require("express");
var app = express();
var fs = require('fs');

app.get("/", function(req, res) {
var data = req.query.q.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFile('digit.png', data, {encoding: 'base64'}, function(err){
        console.log(err);
    });
res.send('image saved!');
});

app.listen(process.env.PORT, function() {
    console.log("server runnning");
});