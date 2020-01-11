var express = require('express')
var app = express()
var favicon = require("serve-favicon")
var path = require("path")

const port = 5000;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});
app.listen(port, () => {
    console.log(`Server started , Listening to ${port}`);
});

app.use(express.static(path.join(__dirname, 'src')))
app.use(favicon(path.join(__dirname, '', 'favicon.ico')))