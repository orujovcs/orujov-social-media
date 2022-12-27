import React from 'react'
import './followersCard.css'
import store from "../../redux/store";
import {follow} from "../../redux/action";
import { Followers } from '../Data/FollwersData'

let lengthF = document.querySelectorAll(".follower").length;
const followC = (id) =>{
    store.dispatch(follow("true"));
    console.log(document.getElementById(`${id}`));
    console.log(document.querySelectorAll(".follower").length)
    document.getElementById(`${id}`).remove();
    lengthF = document.querySelectorAll(".follower").length;
    if(lengthF === 0){
        document.querySelector(".heaer").textContent = "";
    }
}
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3 className='heaer'>New users</h3>
        

        {Followers.map((follower, id)=>{
            return(
                <div className="follower" key={id} id={id} >
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button' onClick={() => followC(id)}>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard