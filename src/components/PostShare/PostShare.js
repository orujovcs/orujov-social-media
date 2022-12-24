import React, { useState, useRef } from "react";
import "./postShare.css";
import Logo from "../../img/emptyProfilPic.webp"
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
// import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
    
  return (
    <div className="PostShare">
      <img src={Logo} alt="Profile" />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <UilScenery />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">
            <span>Share</span>
          </button>

          <div style={{ display: "none" }}>
            <input type="file"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
