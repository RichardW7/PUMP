const { Board, Button, Sensor } = require("johnny-five");
const board = new Board();

const express = require('express');
const app = express();
const PORT = 3001;

var signal = 1;

app.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`);
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

board.on("ready", () => {

  var button = new Button(12);


  button.on("hold", function() {

    console.log("1"); 

  });
  
  button.on("press", function() {

    console.log("2"); 

  });

  button.on("release", function() {
    signal = 1;

    console.log("3"); 

  });

  var sensor = new Sensor("0");

  sensor.on("change", function() {
    console.log(this.value);
    if(this.value > 700) {
        signal = 0;
        console.log("We blew.");
    }
  });

});

app.get('/getStatus', async (req, res) => {
  res.status(201).json({ signal });
});
