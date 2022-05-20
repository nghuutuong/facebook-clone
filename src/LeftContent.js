import React from 'react';
import './LeftContent.css';
import { Avatar } from '@material-ui/core';
import { IconButton } from "@material-ui/core";
import chevronDown from '@iconify/icons-charm/chevron-down';
import { Icon } from '@iconify/react';
import userAvatarFilled from '@iconify/icons-carbon/user-avatar-filled';
import FriendImage from './images/friends.png';
import GroupImage from './images/groups.png';
import MarketPlace from './images/marketplace.png';
import Watch from './images/watch.png';
import History from './images/history.png';
import Saved from './images/saved.png';
import Page from './images/pages.png';
import CandyRush from './images/candy_rush_saga.png';
import DragonCity from './images/dragon_city.png';
import {useStateValue} from './Provider';
function LeftContent() {
    const [{user}, dispatch]= useStateValue();
        return(
            <div className="left_content">
                <div className="left_option">
                    <div className="left_user">
                        <Avatar src={user.photoURL}/>
                        <span>{user.displayName}</span> 
                    </div>
                </div>
                <div className="left_option">
                    
                    <img src={FriendImage} alt="friendimage" />
                    <span>Bạn bè</span>
                    
                </div>
                <div className="left_option">
                    <img src={GroupImage} alt="friendimage" />
                    <span>Nhóm</span>
                </div>
                <div className="left_option">
                    <img src={MarketPlace} alt="friendimage" />
                    <span>Marketplace</span>
                </div>
                <div className="left_option">
                    <img src={Watch} alt="friendimage" />
                    <span>Watch</span>
                </div>
                <div className="left_option">
                    <img src={History} alt="friendimage" />
                    <span>Kỷ niệm</span>
                </div>
                <div className="left_option">
                    <img src={Saved} alt="friendimage" />
                    <span>Đã lưu</span> 
                </div>
                <div className="left_option">
                    <img src={Page} alt="friendimage" />
                    <span>Trang</span>
                </div>
                <div className="left_option">
                    <div className="btn_more">               
                        <Icon icon={chevronDown} inline={true} width="16" height="16"/>
                    </div>
                   <span>Xem thêm</span>
                </div>
                <div className="border_bottom"></div>
                <div className="shortcut_desc">
                    <span>Lối tắt của bạn</span>
                    <div className="shortcut">
                        <img src={CandyRush} alt="candyrush" />
                        <span>Candy Rush Saga</span>
                    </div>
                    <div className="shortcut">
                        <img src={DragonCity} alt="dragoncity" />
                        <span>Dragon City</span>
                    </div>
                    <div className="left_info">
                        <ul>
                            <li>
                                <span>Quyền riêng tư</span>
                            </li>
                                <span aria-hidden="true"> · </span>
                            <li>
                                <span>Điều khoản</span>
                            </li>
                                <span aria-hidden="true"> · </span>
                            <li>
                                <span>Quảng cáo</span>
                            </li>
                                <span aria-hidden="true"> · </span>
                            <li>
                                <span>Lựa chọn quảng cáo</span>
                            </li>
                                <span aria-hidden="true"> · </span>
                            <li>
                                <span>Cookie</span>
                            </li>
                                <span aria-hidden="true"> · </span>
                            <li>
                                <span>Xem thêm</span>
                            </li>
                                <span aria-hidden="true"> · </span>
                            <li>
                                <span>Meta 2022</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        )
    }

export default LeftContent;