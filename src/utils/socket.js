// socket.js file contains 'socket.io client' setup.

import { io } from "socket.io-client"; // 'Socket.IO-Client Library'
import { BASE_URL } from "./constants.js"; // Backend URL

const createSocketConnection = () => {
  // 'Client' connects to the 'Backend Url'.
  const socket = io(BASE_URL); // io(BackendServerUrl,options). io("http://localhost:3000")
  return socket;
};

export { createSocketConnection };

// Realtime Chatting Application using Web Sockets.
/*
Web Sockets :-
 WebSocket is a communication protocol that enables real-time, bi-directional communication between client and server over a persistent connection.
 Bi-Directional communication means 2 way communication. Both client and server can send data at any time.
 server can connect with multiple clients and communicate each other. Connection remains open until closed explicitly.
 Web socket connections can be established using: HTTP Long-Polling, WebSocket Protocol, WebTransport.
 Web Socket requires: Code on both client and server.

"Socket.IO" Library :-
 it is a JavaScript library built on top of 'Web Socket', Engine.IO, fallback techniques.
 it enables 'low-latency', 'bi-directional', 'event-based' communication between client and server.
 it allows client and server talk to each other in real time.

 working:
  1) a "Socket.IO server" runs (commonly with Node.js).
  2) The browser (or mobile app) connects using a persistent connection.
  3) Both client and server can emit events and listen for events.

 Socket.IO give 2 APIs :-
  i)  Client API(Frontend):
       docs url: https://socket.io/docs/v4/client-api/
       * Library command: npm install socket.io-client
       usage:
        configure your client:
        import { io } from "socket.io-client";
        const socket = io("http://localhost:3000"); // connect to backend server
        socket.emit(eventName, data); // send event to server
        // *** IMP - disconnect when done.
        socket.disconnect();

  ii) Server API(Backend) :
       docs url: https://socket.io/docs/v4/server-api/
       * library command: npm install socket.io
       configure your server:
         let http = require('http');
         let server = http.createServer(app); // creates an Http Server from existing Express Server(app).

         const socket = require("socket.io"); // "Socket.Io" Library
         const io = socket(server,{cors:{origin}}); // Socket.IO requires an HTTP server. because, it starts with HTTP handshake and then, upgrades the connection to a WebSocket connection.

         /*
           Fired whenever a new client connects to the Socket.IO server.
           'socket' represents ONE connected client (one user).
         */

/*
         io.on("connection", (socket) => {
                console.log("user connected: ", socket.id);

                // Event Handlers - we write some events using "socket.on(eventName, HandlerFunction)" in this backend server.
                // these events can be called from Frontend using "Socket.IO Client" library
                // socket.on("event name", handler function)
                socket.on("joinChat", () => {});
                socket.on("sendMessage", () => {});
                socket.on("disconnect", () => {});
            });
*/
