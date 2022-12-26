import { useSelector } from "react-redux";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/emptyProfilPic.webp";
import "./profilCard.css";
import React, { useState, useEffect } from "react";


const ProfileCard = () => {
  // const [username, setInfo] = useState(useSelector((state) => state.user.userName));
  const [job,setJob] = useState(useSelector((state) => state.user._job));
  const [followings,setF] = useState(useSelector((state) => state.user.followings));
  const [followers,setF1] = useState(useSelector((state) => state.user.followers));
  const [posts,setP] = useState(useSelector((state) => state.user.posts));
  let user = useSelector((state) => state.user.userName);
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
          job? (<span>FrontEnd develope1r</span>):(<span>Your job</span>)
        }
        
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            {followings ? (<span>{followings}</span>):(<span>0</span>)}
            <span>Followings</span>
          </div>
          {/* <div className="vl"></div> */}
          <div className="follow">
            {followers ? (<span>{followers}</span>):(<span>0</span>)}
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              {/* <div className="vl"></div> */}
              <div className="follow">
            {posts ? (<span>{posts}</span>):(<span>0</span>)}
                <span>Posts</span>
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
