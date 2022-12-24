import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfilCard from '../ProfilCard/ProfilCard'
import "./profilSide.css"
const ProfilSide = () => {
  return (
    <div className='ProfilSide'>
        <LogoSearch/>
        <ProfilCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfilSide