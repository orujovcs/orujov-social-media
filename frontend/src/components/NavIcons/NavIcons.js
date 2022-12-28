import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSignout } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import signOut from "../../img/sign-out.png";
import store from "../../redux/store";
import { pastLogOut} from "../../redux/action";

const NavIcons = () => {
  const signOutL=()=>{
      store.dispatch(pastLogOut("true"));
      window.location.assign('http://localhost:3000/auth');    }
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <Link to="../notifications">
      <img src={Noti} alt="" />
      </Link>
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
      <div className='logOut'  onClick={() => signOutL()}>
          {/* <img src={signOut} alt=''/> */}
          <UilSignout/>
      </div>
    </div>
  );
};

export default NavIcons;
