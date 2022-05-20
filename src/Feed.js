import React from 'react'
import StoryReel from './StoryReel';
import YourThinking from './YourThinking';
import Post from './Post';
import database from './firebase'
import { useState } from 'react';
import { useEffect } from 'react';
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database.collection('posts')
      .orderBy('timestamp', "desc")
      .onSnapshot((snapShot) => 
      setPosts(snapShot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
          }
      )))) 
}, [])
  return (
    <div className="feed">
        <StoryReel/>
        <YourThinking/>
        {
        posts.map((post) => (
          <Post key={post.id}
            profilePic={post.data.profilePic}
            message = {post.data.message}
            timestamp = {post.data.timestamp}
            username = {post.data.username}
            image = {post.data.image}
            likes={post.data.likes}
            id={post.id}
          />
        ))
        }
    </div>
  )
}

export default Feed