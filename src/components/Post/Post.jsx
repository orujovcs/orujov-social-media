import React, { useState } from "react";
import "./Post.css";
import profilPic from "../../img/emptyProfilPic.webp"
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
// import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  // const { user } = useSelector((state) => state.authReducer.authData);
  // const [liked, setLiked] = useState(data.likes.includes(user._id));
  // const [likes, setLikes] = useState(data.likes.length)

  
  // const handleLike = () => {
  //   likePost(data._id, user._id);
  //   setLiked((prev) => !prev);
  //   liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  // };
  return (
    <div className="Post">
      <img
        src={profilPic}
        alt=""
      />

      <div className="postReact">
        <img
          src={Heart}
          alt=""
          style={{ cursor: "pointer" }}
          // onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {/* {likes} likes */}
        12 000 likes
      </span>
      <div className="detail">
        <span>
          <b>Raul</b>
        </span>
        <span> 12</span>
      </div>
    </div>
  );
};

export default Post;
