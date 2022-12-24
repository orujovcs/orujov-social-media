import React from 'react'
import profilPic from "../../img/emptyProfilPic.webp";
import "./header.css"
const Header = () => {
  return (
    <div className='headerM'>
        <div className='profilImg'>
            <img src={profilPic} alt="profilPic" className='profilPicture'/>
        </div>
        <div className='navbar'>
            <div>
                <span>Main</span>
            </div>
            <div>
                <span>Profil</span>
            </div>
            <div>
                <span>Notifications</span>
            </div>
            <div>
                <span>Messages</span>
            </div>
        </div>
        <div className='logOut'>
            <div>
                <span>LogOut</span>
            </div>
        </div>
    </div>
  )
}

export default Header