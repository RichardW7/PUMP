const { Board, Button, Sensor } = require("johnny-five");
const board = new Board();

const express = require('express');
const app = express();
const PORT = 3001;
const getStatus = require('./routes/getStatus');


app.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`);
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use('/getStatus', getStatus);

board.on("ready", () => {

  // Create a standard `led` component instance
  var button = new Button(12);


  button.on("hold", function() {

    console.log("1"); 

  });
  
  button.on("press", function() {

    console.log("2"); 

  });

  button.on("release", function() {

    console.log("3"); 

  });

  var sensor = new Sensor("0");

  sensor.on("change", function() {
    //console.log(this.value);
    if(this.value > 700) {
        console.log("We blew.");
    }
  });

});
