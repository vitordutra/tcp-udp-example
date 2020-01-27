// Example of UDP Protocol

const dgram = require("dgram");
// Create a socket on UDP4
const socket = dgram.createSocket("udp4");

// Creates an event
// Whenever a message is received, a function is called
socket.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);
