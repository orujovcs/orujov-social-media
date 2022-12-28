import React from 'react'
import profilPic from "../../img/emptyProfilPic.webp";
import "./header.css";
import store from "../../redux/store";
import {logOut, pastLogOut} from "../../redux/action";
import signOut from "../../img/sign-out.png";
const Header = () => {
    const signOutL=()=>{
        store.dispatch(pastLogOut("true"));
        window.location.assign('http://localhost:3000/auth');    }
    const toMain = () => {
        window.location.assign('http://localhost:3000/home');
    }
    const toProfil = () => {
        window.location.assign('http://localhost:3000/profile');        
    }
    const toNotifications = () => {
        window.location.assign('http://localhost:3000/notifications');        
    }
    const toMessages = () => {
        window.location.assign('http://localhost:3000/chat');        
    }
  return (
    <div className='headerM'>
        <div className='profilImg'>
            <img src={profilPic} alt="profilPic" className='profilPicture' onClick={() => toMain()}/>
        </div>
        <div className='navbar'>
            <div>
                <span onClick={() => toMain()}>Main</span>
            </div>
            <div>
                <span onClick={() => toProfil()}>Profile</span>
            </div>
            <div>
                <span onClick={() => toNotifications()}>Notifications</span>
            </div>
            <div>
                <span onClick={() => toMessages()}>Messages</span>
            </div>
        </div>
        <div className='logOut'  onClick={() => signOutL()}>
                <img src={signOut} alt=''/>
            <div>
                <span>
                    Sign out
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header