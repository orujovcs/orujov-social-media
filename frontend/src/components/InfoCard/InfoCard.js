import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.js/ProfileModal";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { pastLogOut } from "../../redux/action";

const InfoCard = () => {
  const signOutL=()=>{
      store.dispatch(pastLogOut("true"));
      window.location.assign('http://localhost:3000/auth');    
    }
  const [modalOpened, setModalOpened] = useState(false);
  const profiInfo = useSelector((state) => state.currentUser);
  const username = useSelector((state) => state.userName);
  console.log(profiInfo + "   " + username);
  const arr = profiInfo.find((el) =>el.username = username)
  console.log(arr);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Name </b>
        </span>{
          arr?.firstname ? (<span>{arr.firstname}</span>):(<span>...</span>)
        }
      </div>
      <div className="info">
        <span>
          <b>Surname</b>
        </span>{
          arr?.lastname ? (<span> {arr.lastname}</span>):(<span>...</span>)
        }
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>{
          arr?.relashion ? (<span>{arr.relashion}</span>):(<span>...</span>)
        }
        
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>{
          arr?.livs ? (<span>{arr.livs}</span>):(<span>...</span>)
        }
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>{
          arr?.works ? (<span>{arr.works}</span>):(<span>...</span>)
        }
      </div>

      <button className="button logout-button" onClick={() => signOutL()}>Logout</button>
    </div>
  );
};

export default InfoCard;
