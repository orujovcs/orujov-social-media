import React from 'react'
import Header from '../../components/Header/Header'
import PostSide from '../../components/PostSide/PostSide'
import ProfilSide from '../../components/ProfilSide/ProfilSide'
import RightSide from '../../components/RightSide/RightSide'
import "./home.css"
const Home = () => {
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