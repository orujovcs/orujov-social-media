import { connect, useSelector } from "react-redux";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/emptyProfilPic.webp";
import "./profilCard.css";
import {getDetails} from "../../redux/action";
import store from "../../redux/store";
import React, { useState, useEffect } from "react";


const ProfileCard = () => {
  const user = useSelector((state) => state.userName)
  const followers = useSelector((state) => state.followers)
  const followings = useSelector((state) => state.followings)
  const posts = useSelector((state) => state.posts)
  const job = useSelector((state) => state._job)
  
  store.dispatch(getDetails());
  useEffect(() => {
    console.log(user);
    console.log(followers);
  });
  const ProfilePage = true;
    return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>@{user}</span>
        {
          job? (<span>{job}</span>):(<span>Your job</span>)
        }
        
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            {followings ? (<span>{followings}</span>):(<span>0</span>)}
            <span className="hide">Followings</span>
          </div>
          {/* <div className="vl"></div> */}
          <div className="follow">
            {followers ? (<span>{followers}</span>):(<span>0</span>)}
            <span className="hide">Followers</span>
          </div>

          {ProfilePage && (
            <>
              {/* <div className="vl"></div> */}
              <div className="follow">
            {posts ? (<span>{posts}</span>):(<span>0</span>)}
                <span className="hide">Posts</span>
              </div>
            </>
          )}
        </div>
        <hr/>
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
// export default connect(mapStateToProps, mapDispatchToProps) (ProfileCard);
