import React, { useState, useRef } from "react";
import ProfileImage from "../../img/emptyProfilPic.webp";
import "./postShare.css";
import store from "../../redux/store";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import {createP} from "../../redux/action";
import ShareModal from "../ShareModal/ShareModal";
import { useDispatch } from "react-redux";


const PostShare = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
      console.log(imageRef.current);
    }
  };
  const createPost = ()=>{
    let postDes = document.querySelector(".whatsHapp").value;
    store.dispatch(createP(image.image,postDes));
    console.log(image.image);
    console.log(postDes);
    setImage(null);
    document.querySelector(".whatsHapp").value = "";
    // document.querySelector(".previewImage").remove();
  }

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input className="whatsHapp" type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" id="videoMob" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" id="locationMob" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" id="sheduleMob" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" onClick={() => createPost()}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
              className="pictureF"
            />
            {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
          </div>
        </div>
      {image && (
        <div className="previewImage"> 
          <UilTimes onClick={()=>setImage(null)}/>
          <img className="imageSrc" src={image.image} alt="" />
        </div>

      )}
      </div>
    </div>
  );
};

export default PostShare;
