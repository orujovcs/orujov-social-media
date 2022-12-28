import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import {getNewTags, getNews} from "../../redux/action";
import "./notifications.css"
const Notifications = () => {
    // const news = useSelector((state) => state.news);
    // const state = useSelector((state) => state.tags);
    // Object.values(state).forEach((el) => {
    //     store.dispatch(getNews(el.tag));
    // })
    // store.dispatch(getNewTags());
    const news = useSelector((state) => state.news1);
    console.log(news);
  return (
    <>
        <Header/>
        <div className="Notifications">
            <div className="Notifications-container">
            <h1>Notifications : 0</h1>
            <h2>So that you do not get bored, we based on your interests, select news for you!</h2>
            <div className="Notifications-list">
                {
                news.map((news, id) =>{
                    return <div className="notification">
                        <div className="tagC"><h2>#{news.tag}</h2></div>
                        <div className="tagN"><span><b>{news.news}</b></span></div>
                    </div>
                })
                }
            </div>
            
            </div>
        </div>
    </>
  )
}

export default Notifications