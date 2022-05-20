import React from 'react';
import './RightContent.css'
import FriendList from './FriendList';
class RightContent extends React.Component {
    render() {
        return(
            <div className="right_content">
                <FriendList/>
            </div>
        )
    }
}

export default RightContent;