import React from 'react';
import './StoryReel.css';
import avatarImage from './images/candy_rush_saga.png';
import profileImage from './images/weather/summer.jpg' 
import Story from './Story';
class StoryReel extends React.Component {
    render() {
        return(
            <div className="story_reel">
                <Story 
                avatar ={profileImage}
                profile={avatarImage}
                title="Tuong"/>
                 <Story 
                avatar ={profileImage}
                profile={avatarImage}
                title="Tuong"/>
                 <Story 
                avatar ={profileImage}
                profile={avatarImage}
                title="Tuong"/>
                 <Story 
                avatar ={profileImage}
                profile={avatarImage}
                title="Tuong"/>
                 <Story 
                avatar ={profileImage}
                profile={avatarImage}
                title="Tuong"/>
            </div>
        )
    }
}

export default StoryReel;