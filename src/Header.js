import React from 'react';
import { Avatar } from '@material-ui/core';
import { Icon } from '@iconify/react';
import facebookMessenger from '@iconify/icons-mdi/facebook-messenger';
import FacebookImage from './images/facebook_logo.svg.png';
import SearchIcon from "@material-ui/icons/Search";
import homeIcon from '@iconify/icons-mdi/home';
import facebookGaming from '@iconify/icons-mdi/facebook-gaming';
import userAvatarFilled from '@iconify/icons-carbon/user-avatar-filled';
import groupAlt from '@iconify/icons-el/group-alt';
import televisionPlay from '@iconify/icons-mdi/television-play';
import storeIcon from '@iconify/icons-ps/store';
import appsIcon from '@iconify/icons-ion/apps';
import bellIcon from '@iconify/icons-mdi/bell';
import caretDown from '@iconify/icons-carbon/caret-down';
import { IconButton } from "@material-ui/core";
import './Header.css';
import {useStateValue} from './Provider';
function Header() {
    const [{user}, dispatch]= useStateValue();
        return(
            <>
                <div className="header">
                    <div className="left_header">
                        <img src={FacebookImage} alt="facebook_image" />  
                        <div className="search_input">      
                            <SearchIcon/>
                            <input type="text" placeholder="Tìm kiếm trên Facebook"/> 
                        </div>  
                    </div>
                    <div className="center_header">
                        <div className="option_header">
                            <Icon icon={homeIcon} width="28" height="28" />
                        </div>
                        <div className="option_header">
                            <Icon icon={televisionPlay} width="28" height="28" />
                        </div>
                        <div className="option_header">
                            <Icon icon={storeIcon} width="28" height="28" />
                        </div>
                        <div className="option_header">
                            <Icon icon={groupAlt} width="28" height="28" />
                        </div>
                        <div className="option_header">
                            <Icon icon={facebookGaming} width="28" height="28" inline={true}/>
                        </div>
                    </div>
                    <div className="right_header">
                        <div className="header_user">
                            {/* <Icon icon={userAvatarFilled} width="32" height="32" /> */}
                            <Avatar src={user.photoURL}/>
                            <h4>{user.displayName}</h4>
                        </div>
                        <div className="right_option_header">
                            <IconButton>
                                <Icon icon={appsIcon} />
                            </IconButton>
                        </div>
                        <div className="right_option_header">
                            <IconButton>     
                                <Icon icon={facebookMessenger} />
                            </IconButton>
                        </div>
                        <div className="right_option_header">
                            <IconButton>
                                <Icon icon={bellIcon} />
                            </IconButton>
                        </div>
                        <div className="right_option_header">
                            <IconButton>
                                <Icon icon={caretDown} />
                            </IconButton>
                        </div>     
                    </div>
                </div>
            </>
        )
    } 

export default Header;