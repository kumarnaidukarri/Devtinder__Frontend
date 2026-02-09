// socket.js file contains 'socket.io client' setup.

import { io } from "socket.io-client"; // 'Socket.IO-Client Library'
import { BASE_URL } from "./constants.js"; // Backend URL

const createSocketConnection = () => {
  // 'Client' connects to the 'Backend Url'.
  const socket = io(BASE_URL); // io(BackendServerUrl,options). io("http://localhost:3000")
  return socket;
};

export { createSocketConnection };

//
/*
Web Sockets :-
 Web Sockets are a concept used to enable Real-time Communication. it is a Protocol.
 Bi-Directional communication: 2 way communication. i.e, Both Client and Server can send data at any time.
 a server can connect with multiple clients and communicate each other.
 Web socket connections can be established using: HTTP Long-Polling, WebSocket Protocol, WebTransport.
 In Web Sockets,
  Client have to make a connection with the Server. so, there will be 'code' on both client and server for web sockets.


"Socket.IO" Library :-
 it is a JavaScript library built on top of 'Web Socket' and fallback techniques.
 it enables 'low-latency', 'bi-directional', 'event-based' communication between client and server.
 it allows client and server talk to each other in real time.
 Working:
  -> You run a "Socket.IO server" (commonly with Node.js).
  -> The browser (or mobile app) connects via a persistent connection.
  -> Both sides can emit events and listen for events.

 it gives 2 APIs Docs:
  i)  Client API(Frontend):
       docs url: https://socket.io/docs/v4/client-api/
       * Library command: npm install socket.io-client
       setup steps:
       1. Configure your Client:
        import { io } from "socket.io-client";
        const socket = io("http://localhost:3000"); // connect to backend server
        socket.emit(eventName, data);
        // *** IMP - Later disconnect the Socket
        socket.disconnect();

  ii) Server API(Backend) :
       docs url: https://socket.io/docs/v4/server-api/
       * Library command: npm install socket.io
       setup steps:
*/
