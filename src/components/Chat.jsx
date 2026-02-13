// Chat.jsx contains 'Client Chat' Component

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

// my modules
import { createSocketConnection } from "../utils/socket.js";
import { BASE_URL } from "../utils/constants.js";

const Chat = () => {
  const params = useParams(); // 'useParams' Hook used to access 'Path Parameters' of URL.
  const { targetUserId } = params; // URL  ->  "/chat/:targetUserId"  ->  "/chat/123"  ex: params.targetUserId = "123"
  const [messages, setMessages] = useState([]); // local state variable
  const [newMessage, setNewMessage] = useState("");

  const userData = useSelector((appStore) => appStore.user); // Subscribes to User slice of Redux store.
  const userId = userData?._id;

  const fetchChatMessages = async () => {
    // Get chat of the target user.
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    console.log("target user chat - ", chat.data.messages);

    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text: text,
      };
    });
    setMessages(chatMessages); // Updates the state
  };
  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }

    // *** when component loads, Create a Socket Client Connection.
    const socket = createSocketConnection();

    // Emit an Event - 'joinChat' private room.
    socket.emit("joinChat", { userId, targetUserId }); // Event calling - 'joinChat event' tells backend to join/create a private between 2 users.
    // emit(event,data). Assume Understand it like API calling, API call(path,data)  =  emit(path,data).
    /* Socket Events Emitting(emit()):
        we configure some Events(with handler functions) in 'Socket.io Backend Server'.
        now we connect to backend and call those Events using emit().
    */

    // Socket Event - listen for incoming messages from backend . i.e, backend calls this event 'messageReceived'.
    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      console.log(
        "'messageReceived' event got Hitted in Socket Client(Frontend)",
      );
      setMessages((messages) => [...messages, { firstName, lastName, text }]); // Updates the State
    });

    // *** Cleanup Func - when component unmount, Disconnect the Socket.
    return () => {
      socket.disconnect();
      console.log("!!! Disconnected the Socket"); // Disconnect the Socket Connection.
    };
  }, [userId, targetUserId]);

  // Socket Event - to send data to Socket Server(backend).
  const sendMessage = () => {
    const socket = createSocketConnection(); // creates a socket client connection.
    socket.emit("sendMessage", {
      firstName: userData.firstName,
      lastName: userData.lastName,
      userId,
      targetUserId,
      text: newMessage,
    }); // Emitting a 'send message' event
    setNewMessage(""); // Updates the state - Clears the input box
  };

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
            // my messages must be on 'right-side' and receiver user messages on 'left-side'.
            <div
              key={index}
              className={
                "chat " +
                (msg.firstName === userData.firstName
                  ? "chat-end"
                  : "chat-start")
              }
            >
              <div className="chat-header">
                {msg.firstName + " " + msg.lastName}
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div
                className={
                  "chat-bubble " +
                  (msg.firstName === userData.firstName
                    ? "bg-[#075e54]"
                    : "bg-gray")
                }
              >
                {msg.text}
              </div>
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
        <button
          className="btn btn-secondary"
          onClick={() => {
            sendMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
