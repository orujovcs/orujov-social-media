import React from 'react'
import Logo from "../../img/emptyProfilPic.webp"
import CoverImg from "../../img/coverImg.webp"
import "./profilCard.css"
import { Link } from 'react-router-dom'
const ProfilCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={CoverImg} alt="CoverImage" />
        <img src={Logo} alt="ProfileImage"/>
      </div>
      <div className="ProfileName">
        <span>Raul Orucov</span>
        <span>Write about yourself</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>15</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>15</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
          {/* {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                posts.filter((post)=>post.userId === user._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
          )} */}
        </div>
        <hr />

        <div className='lastChild'>
            <span>
            <Link to={`/profile/`} style={{ textDecoration: "none", color: "inherit" }}>
                My Profile
            </Link>
            </span>
        </div>
      </div>
      
    </div>
  );
}

export default ProfilCard