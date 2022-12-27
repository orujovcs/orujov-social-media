import React/*, { useRef, useState }*/ from "react";
import Header from "../../components/Header/Header";
// import ChatBox from "../../components/ChatBox/ChatBox";
// import Conversation from "../../components/Coversation/Conversation";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.css";
// import { useEffect } from "react";
// import { userChats } from "../../api/ChatRequests";
// import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
  return (<>
      <Header/>
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            
          </div>
        </div>
      </div>

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
