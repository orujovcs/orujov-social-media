import React from "react";
import Header from "../../components/Header/Header";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfilCard/ProfilCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <Header/>
      <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
          <ProfileCard location = 'profilePage'/>
        <PostSide/>
        </div>
        <RightSide/>
      </div>
    </>
  );
};

export default Profile;
