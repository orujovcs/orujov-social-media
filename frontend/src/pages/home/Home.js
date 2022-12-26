import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {getDetails} from "../../redux/action";
import store from "../../redux/store";
import Header from '../../components/Header/Header'
import PostSide from '../../components/PostSide/PostSide'
import ProfilSide from '../../components/ProfilSide/ProfilSide'
import RightSide from '../../components/RightSide/RightSide'
import "./home.css"
const Home = () => {
  const state1 = useSelector((state) => state);
  useEffect(() => {
    console.log(state1);
    store.dispatch(getDetails(state1));
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

export default Home