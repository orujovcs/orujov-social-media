import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {getDetails} from "../../redux/action";
import store from "../../redux/store";
import Header from '../../components/Header/Header'
import PostSide from '../../components/PostSide/PostSide'
import ProfilSide from '../../components/ProfilSide/ProfilSide'
import RightSide from '../../components/RightSide/RightSide'
import "./home.css"

const Home = () => {
  const profil = useSelector((state) => state.userName)
  useEffect(() => {
    console.log(profil);
  });
  return (<>
    <Header/>
    <div className='homeSide'>
      <ProfilSide/>
      <PostSide/>
      <RightSide/>
    </div>
    </>
  )
}

export default Home;