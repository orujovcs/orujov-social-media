import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import "./Chat.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import {sendM, downM} from "../../redux/action";
import ProfileImage from "../../img/emptyProfilPic.webp";
import NavIcons from "../../components/NavIcons/NavIcons";

const Chat = () => {
  // document.querySelector(".Chat")?.addEventListener('keypress',(e) => {
  //   console.log(e.keyCode);
    // if (e.key === 'Enter') {
    //       sendMessage(); 
    // }
  // });
  
  store.dispatch(downM());
  const messages = useSelector((state) => state.messages);
  const sendMessage = () =>{
    let message = document.querySelector(".inputM").value;
    console.log(messages);
    store.dispatch(sendM(message));
    document.querySelector(".Chat-list").scrollTo(0, document.querySelector(".Chat-list").scrollHeight);
  }
  return (
  
  <>
      <Header/>
      <div className="mobNav">
        <NavIcons/> 
      </div>
    <div className="Chat">
        <div className="Chat-container">
          <h2>Common Chat</h2>
          <div className="Chat-list">
            {
              messages.map((message, id) =>{
                return <div className="chat-message">
                  <img className="profilpicChat" src={ProfileImage} alt=""/>
                  <div className="messageInfo">
                    <div className="messageInfoLeft">
                        <div className="info1"><span>{message.username}</span></div>
                        <div className="info2"><span>{message.message}</span></div>
                    </div>
                    <div className="info3"><span>{message.data_time.split(" ")[1]}</span></div>
                  </div>
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
