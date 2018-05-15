var express = require("express");
var app = express();

var ratings = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0
};

//Call Handler: Was wird bei Aufruf der Seite gemacht
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/test", function(req, res){
  res.sendFile(__dirname + "/test.html");
});

app.get("/rate/:rating", function(req, res) {
  console.log(req.params.rating);
  ratings[req.params.rating]++;
  console.log(ratings);
  res.send("Yay");
});

app.get("/result", function(req, res){
  res.sendFile(__dirname + "/result.html");
})

app.get("/ratings", function(req, res){
  res.send(JSON.stringify(ratings));
});

var server = app.listen(8080, function() {
  console.log("Server läuft auf Port 8080")
});
