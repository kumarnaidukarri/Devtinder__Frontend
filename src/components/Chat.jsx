// Chat.jsx component contains 'Client Chat'

import { useState } from "react";
import { useParams } from "react-router";

const Chat = () => {
  const params = useParams(); // 'useParams' Hook used to access 'Path Parameters' of URL.
  const { targetUserId } = params; // URL  ->  "/chat/:targetUserId"  ->  "/chat/123"   ex:params.targetUserId
  const [messages, setMessages] = useState([{ text: "Hello World" }]); // local state variable

  return (
    <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh]  flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>

      <div className="p-5 flex-1 overflow-scroll">
        {/* Display Messages  -  'Map()' loops on 'Array of Messages' */}
        {messages.map((msg, index) => {
          /*
          return (
            <div key={index} className="">
              {msg.text}
            </div>
          );
          */
          // Daisy UI component - Chat Bubble(chat with header footer)
          return (
            <div key={index} className="chat chat-start">
              <div className="chat-header">
                Kumar
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          );
        })}
      </div>

      <div className="p-5 border-t border-gray-600  flex items-center gap-2">
        <input
          className="flex-1  border border-gray-500 rounded text-white p-2"
          name="hello"
        />
        <button className="btn btn-secondary"> Send </button>
      </div>
    </div>
  );
};

export default Chat;

//
/*
Web Sockets :-
 Web Sockets are a concept used to enable Real-time Communication. it is a Protocol.
 Bi-Directional" communication: 2 way communication. i.e, Both Client and Server can send data at any time.
 a server can connect with multiple clients and communicate each other.
 Web socket connections can be established using: HTTP Long-Polling, WebSocket Protocol, WebTransport.

"Socket.IO" Library :-
 it is a JavaScript library built on top of 'Web Socket' and fallback techniques.
 it enables 'low-latency', 'bi-directional', 'event-based' communication between client and server.
*/
