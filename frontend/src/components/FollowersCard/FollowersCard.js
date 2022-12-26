import React from 'react'
import './followersCard.css'
import store from "../../redux/store";
import {follow} from "../../redux/action";

import { Followers } from '../Data/FollwersData'
const FollowersCard = () => {
    const followC = () =>{
        store.dispatch(follow("true"));
    }
  return (
    <div className="FollowersCard">
        <h3>New users</h3>

        {Followers.map((follower, id)=>{
            return(
                <div className="follower" key={id} >
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button' onClick={() => followC()}>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard