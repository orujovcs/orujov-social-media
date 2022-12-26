import React from 'react'
import './posts.css'
import { PostsData } from '../Data/PostsData'
import Post from '../Post/Post'
const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((post, id)=>{
            return <Post data={post}  key={id} id={id}/>
        })}
    </div>
  )
}

export default Posts