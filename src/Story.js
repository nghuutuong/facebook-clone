import React from 'react'
import './Story.css';
import {Avatar} from '@material-ui/core';
function Story({
    avatar, 
    profile, 
    title
    }) 
    {
  return (
    <div className="story" 
        style={{backgroundImage:`url(${avatar})`,
}}>
        <Avatar className="story_avatar" src={profile}/>
        <span>{title}</span>
    </div>
  )
}

export default Story