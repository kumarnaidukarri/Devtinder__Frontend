// Chat.jsx component contains 'Client Chat'

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

// my modules
import { createSocketConnection } from "../utils/socket.js";

const Chat = () => {
  const params = useParams(); // 'useParams' Hook used to access 'Path Parameters' of URL.
  const { targetUserId } = params; // URL  ->  "/chat/:targetUserId"  ->  "/chat/123"  ex: params.targetUserId = "123"
  const [messages, setMessages] = useState([{ text: "Hello World" }]); // local state variable
  const [newMessage, setNewMessage] = useState("");

  const userData = useSelector((appStore) => appStore.user); // Subscribes to User slice of Redux store.
  const userId = userData?._id;

  useEffect(() => {
    if (!userId) {
      return;
    }

    // *** when component loads, Create a Socket Client Connection. then, Emits an event 'joinChat'.
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, targetUserId }); // Event calling - 'joinChat event' tells backend to join/create a private between 2 users.
    // emit(event,data). Assume Understand it like API calling, API call(path,data)  =  emit(path,data).
    /* Socket Events Emitting(emit()):
        we configure some Events(with handler functions) in 'Socket.io Backend Server'.
        now we connect to backend and call those Events using emit().
    */

    // *** Cleanup Func - when component unmount, Disconnect the Socket.
    return () => {
      socket.disconnect();
      console.log("Disconnected the Socket"); // Disconnect the Socket Connection.
    };
  }, [userId, targetUserId]);

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
          value={newMessage}
          onChange={
            (e) => setNewMessage(e.target.value) // Updating state
          }
        />
        <button className="btn btn-secondary"> Send </button>
      </div>
    </div>
  );
};

export default Chat;
