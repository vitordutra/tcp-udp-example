// Example of TCP Protocol

// net package -> creates a server
const net = require("net");

// server will give us a socket
// socket -> connection
const server = net.createServer(socket => {
  // The moment a client connects, we're gonna send it back.
  socket.write("Hello.\n");
  // If the client sends more data
  // The data function will receive the data and prints on the console
  socket.on("data", data => {
    console.log(data.toString());
  });
  ("");
});

server.listen(8080);
