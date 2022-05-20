import React, { useEffect } from 'react';
import './YourThinking.css';
import {useState} from 'react';
import {Avatar} from '@material-ui/core';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoodIcon from '@mui/icons-material/Mood';
import database from './firebase';
import firebase  from 'firebase/compat/app';
import { useStateValue } from "./Provider";

function YourThinking() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const placeholder = `${user.displayName} ơi, bạn nghĩ gì thế ?`;
    const handleOnSubmit = (e) => {
            
            e.preventDefault();
            database.collection('posts').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl,
                likes: 0,
            })
            
            
            setInput('')
            setImageUrl('')
        }
    
   
  return (
    <div className="your_thinking">
        <div className="thinking_top">
            <Avatar src={user.photoURL}/>
            <form action="">
                <input className='thinking_input' 
                value= {input}        
                onChange = {(event) => setInput(event.target.value)}
                placeholder={placeholder}/>
                <input 
                value = {imageUrl}
                onChange = { (event) => setImageUrl(event.target.value)}
                placeholder = "Đường dẫn ảnh"
                />
                <button onClick = {handleOnSubmit} type = "submit"></button>
            </form>
           
        </div>
        <div className="thinking_bottom">
            <div className="thinking_options">
                <PhotoLibraryIcon style={{color:"green",}}/>
    
                <span>Ảnh/video</span>
            </div>
            <div className="thinking_options">
                <LocalOfferIcon style={{color:"blue",}}/>
                <span>Gắn thẻ bạn bè</span>
            </div>
            <div className="thinking_options">
                <MoodIcon style={{color:"orange",}}/>
                <span>Cảm xúc/hoạt động</span>
            </div>
        </div>
    </div>
  )
}

export default YourThinking