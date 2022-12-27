import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import "./Chat.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import {sendM} from "../../redux/action";

const Chat = () => {
  // document.querySelector(".Chat")?.addEventListener('keypress', function (e) {
  //   if (e.key === 'Enter') {
  //         sendMessage(); 
  //   }
  // });
  const sendMessage = () =>{
    let message = document.querySelector(".inputM").value;
    console.log(messages);
    store.dispatch(sendM(message));
  }
  // useEffect(() => {
  //   sendMessage();
  // });
  // sendMessage();
  const messages = useSelector((state) => state.messages);
  return (
  
  <>
      <Header/>
    <div className="Chat">
        <div className="Chat-container">
          <h2>Common Chat</h2>
          <div className="Chat-list">
            <h1>Hi</h1>
            {
              messages.map((message, id) =>{
                return <div className="chat-message">
                  <span>{message.username}</span>
                  <span>{message.message}</span>
                  <span>{message.data_time.split(" ")[1]}</span>
                </div>
              })
            }
          </div>
          <div className="inputCl">
            <input className="inputM" type="text" placeholder="Let's start conversation" />
            <button className="button sendB" onClick={() => sendMessage()}>
              Send
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Chat;
