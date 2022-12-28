import React from 'react'
import './TrendCard.css'
import {TrendData} from '../Data/TrendData'
import { useSelector } from 'react-redux'
const TrendCard = () => {
    const tags = useSelector((state) => state.tags);
  return (
   <div className="TrendCard">
       <h3>Trends for your</h3>
        {
            tags ? (tags.map((trend, id)=>{
                return(
                    <div className="trend" key={id} >
                        <span>#{trend.tag}</span>
                        <span>99k shares</span>
                    </div>
                )
           })) : (<p>...</p>) 
        }
       {TrendData.map((trend, id)=>{
            return(
                <div className="trend" key={id} >
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
       })}
   </div>
  )
}

export default TrendCard