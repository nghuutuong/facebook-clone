import React from 'react'
import './FriendList.css';
import Avatar1 from './images/avatar1.jpg';
import Avatar2 from './images/avatar2.jpg';
import Avatar3 from './images/avatar3.jpg';
import Avatar4 from './images/avatar4.jpg';
import Avatar5 from './images/avatar5.jpg';
import Avatar6 from './images/avatar6.jpg';
import Avatar7 from './images/avatar7.jpg';
import Avatar8 from './images/avatar8.jpg';
import Avatar9 from './images/avatar9.jpg';
import Avatar10 from './images/avatar10.jpg';
import Avatar11 from './images/avatar11.jpg';
import Avatar12 from './images/avatar12.jpg';
import Avatar13 from './images/avatar13.jpg';
import Avatar14 from './images/avatar14.jpg';
import Avatar15 from './images/avatar15.jpg';
import Avatar16 from './images/avatar16.jpg';

import Button from '@material-ui/core/Button';
function FriendList() {
  const friendList = [
    {id:1, avatar:Avatar1, name:'Nguyễn Ngọc Ánh'},
    {id:2, avatar:Avatar2, name:'Lâm Kinh Hoàng'},
    {id:3, avatar:Avatar3, name:'Trần Thế Nhã'},
    {id:4, avatar:Avatar4, name:'Văn Khoát'},
    {id:5, avatar:Avatar5, name:'Yến Nhi'},
    {id:6, avatar:Avatar6, name:'Thanh Kim Liên'},
    {id:7, avatar:Avatar7, name:'Võ Kiên Trung'},
    {id:8, avatar:Avatar8, name:'Nhật Lương'},
    {id:9, avatar:Avatar9, name:'Vương Vũ'},
    {id:10, avatar:Avatar10, name:'Nhất Linh'},
    {id:11, avatar:Avatar11, name:'Lôi Châu'},
    {id:12, avatar:Avatar12, name:'Nhân Tiền '},
    {id:13, avatar:Avatar13, name:'Phương Hoàng Gia Ngọc'},
    {id:14, avatar:Avatar14, name:'Khuyết Kiều Trang'},
    {id:15, avatar:Avatar15, name:'Gia Bảo'},
    {id:16, avatar:Avatar16, name:'Linh Hạ'},
  ]
  console.log(friendList)
  return (
    <div className ="friend_list">
      <div className="widget">
        <span>Được tài trợ</span>
      </div>
      <div className="hr"></div>
      <div className="friend_option">
        <span>Người liên hệ</span>
        <Button>AA</Button>
        <Button>BB</Button>
        <Button>CC</Button>
      </div>
      {friendList.map((item,index) => {
        return(
        <div className="friend" key={index.key}>
            <img className="friend_avatar" src={item.avatar} alt="" />
            <span className="friend_name">{item.name}</span>
            <div className="online_circle"></div>
        </div>
        )
      })}
    </div>
  )
}

export default FriendList