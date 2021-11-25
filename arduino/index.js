const { Board, Button, Sensor } = require("johnny-five");
const board = new Board();

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