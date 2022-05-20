import React from 'react';
import './Post.css';
import Like from './images/like.svg';
import Heart from './images/heart.svg';
import Smiley from './images/smiley.svg';

import database from './firebase'
import {Avatar} from '@material-ui/core';
import postImage from './images/weather/Signs-of-Winter.jpg';
import { ThumbUp,ChatBubbleOutline, NearMe } from '@material-ui/icons';
import {useStateValue} from './Provider'
function Post(
    {
        profilePic, 
        username, 
        image,
        timestamp,
        message,
        likes,
        id,
    }) {
    const [{user}, dispatch]= useStateValue();
    const getLikes = (likes) => {
        if (likes >= 1000 * 1000) return `${likes / (1000 * 1000)} m`;
        else if (likes >= 1000) return `${likes / 1000} k`;
        return likes > 0 ? likes : 1;
      };
      const handleLike = () => {
        database.collection("posts")
          .doc(id)
          .update({
            likes: likes + 1,
          });
          
      };
  return (
    <div className="post">
        <div className="post_top">
            <Avatar src={user.photoURL} className="post_avatar"/>
            <div className="post_info">
                <span>{username}</span>
                <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
            </div>
        </div>
        <div className="post_bottom">
            <p className="message">{message}</p>
            <div className="post_image">
                <img src={image} alt="" />
            </div>
            {likes!=null ? 
            <div className="option_info">
                <img className="like_image" src={Like} alt="" />
                <img className="like_image" src={Heart} alt="" />
                <img className="like_image" src={Smiley} alt="" />
                <span>{getLikes(likes)}</span>
            </div>
            :
            ''
            }
            <div className="post_option">
                <div className="option" onClick={handleLike}>
                    <ThumbUp/>
                
                    <span>Thích</span>
                </div>
                <div className="option">
                    <ChatBubbleOutline/>
                    <span>bình luận</span>
                </div>
                <div className="option">
                    <NearMe/>
                    <span>Chia sẻ</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Post;