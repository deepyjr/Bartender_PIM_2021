var http = require("http").createServer(handler); // Create Server
var fs = require("fs"); 
var io = require("socket.io")(http);
var Gpio = require("onoff").Gpio; 
var LED = new Gpio(4, "out"); // Configure the GPIO pins
var pushButton = new Gpio(17, "in", "both"); // Configure button Pin

http.listen(8080); // Listen to port 8080

function handler(req, res) {
  // Create server
  fs.readFile(__dirname + "/public/index.html", function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" }); // HTTP Status 404: Not Found
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" }); // Header setup
    res.write(data); // Send the file data to the browser.
    return res.end();
  });
}

io.sockets.on("connection", function (socket) {
  // WebSocket Connection
  var lightvalue = 0;
  pushButton.watch(function (err, value) {
    // Watch for hardware interrupts on pushButton
    if (err) {
      console.error("There was an error", err); // Output error message to console
      return;
    }
    lightvalue = value;
    socket.emit("light", lightvalue); // Send button status to client
  });
  socket.on("light", function (data) {
    // Get light switch status from client
    lightvalue = data;
    if (lightvalue != LED.readSync()) {
      // Only change LED if status has changed
      LED.writeSync(lightvalue); // Turn LED on or off
    }
  });
});

process.on("SIGINT", function () {
  // Handle CTRL + C
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
  process.exit(); // Exit completely
});
