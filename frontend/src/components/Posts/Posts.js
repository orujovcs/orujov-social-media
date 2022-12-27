import React from 'react'
import './posts.css'
import { connect, useSelector } from "react-redux";
import { PostsData } from '../Data/PostsData'
import Post from '../Post/Post'
const Posts = () => {

  const img = useSelector((state) => state.postP);
  return (
    <div className="Posts">
        {img? (Object.values(img).reverse().map((post, id)=>{
              return <Post data={post}  key={id} id={id}/>
          })):(<p></p>)}
        {PostsData.map((post, id)=>{
            return <Post data={post}  key={id} id={id}/>
        })}
    </div>
  )
}

export default Posts