// socket.js file contains 'socket.io client' setup.

import { io } from "socket.io-client"; // 'Socket.IO-Client Library'
import { BASE_URL } from "./constants.js"; // Backend URL

const createSocketConnection = () => {
  // 'client' connects to the 'backend url'.
  const socket = io(BASE_URL); // io(BackendServerUrl,options).  io("http://localhost:3000") returns 'connected socket client instance'.
  return socket;
  /*
  - Emits events using socket.emit()
  - Listens using socket.on()
  - Disconnect using socket.disconnect() */
};

export { createSocketConnection };

// Realtime Chatting Application using Web Sockets.
/*
Web Sockets :-
 WebSocket is a communication protocol that enables real-time, bi-directional communication between client and server over a persistent connection.
 Bi-directional means: Client can send data to server anytime. Server can send data to client anytime.
 key points:
   • Connection stays open until explicitly closed
   • One server can handle multiple clients
   • Used for real-time apps (chat, notifications, gaming, etc.)
 note:
   Web Socket requires: code on both Client and Server.
   *** WebSocket starts with an HTTP handshake, then upgrades to a "WebSocket connection".


"Socket.IO" Library :-
 it is a JavaScript library built on top of 'Web Socket', Engine.IO, fallback techniques.
 it enables 'low-latency', 'bi-directional', 'event-based communication' between client and server.
 it allows client and server talk to each other in real time.

 Working:
  1) a "Socket.IO server" runs (commonly with Node.js).
  2) The browser (or mobile app) connects using a persistent connection.
  3) Both client and server can emit events and listen for events.
     i.e, communication is 'event-driven'.

 Socket.IO give 2 APIs :-
  i)  Client API(Frontend):
       docs url: https://socket.io/docs/v4/client-api/
       * Library command: npm install socket.io-client
       usage:
        configure your client:
        import { io } from "socket.io-client";
        const socket = io("http://localhost:3000"); // connect to backend server
        socket.emit(eventName, data); // 1. Send event to server
        socket.on("eventName", (data) => { console.log(data); }); // 2. Listen for event from server
        // *** IMP - disconnect when done.
        socket.disconnect();

  ii) Server API(Backend) :
       docs url: https://socket.io/docs/v4/server-api/
       * library command: npm install socket.io
       configure your server:
         let http = require('http');
         let httpServer = http.createServer(app); // creates an Http Server from existing Express Server(app).

         const { Server } = require("socket.io"); // "Socket.Io" Library
         const socketServer = new Server(httpServer,{cors:{origin}}); // Socket.IO requires an HTTP server. because, it starts with HTTP handshake and then, upgrades the connection to a WebSocket connection.

         socketServer.on("connection", (socket) => {
            console.log("User connected:", socket.id);

            // Defining socket server events :-
            // syntax: socket.on("event name", handler function)
            socket.on("joinChat", () => {});
            socket.on("sendMessage", () => {});
            socket.on("disconnect",  () => {console.log("User disconnected:", socket.id)});
         });
     });
*/
