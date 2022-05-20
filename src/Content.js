import React from 'react';
import './Content.css'
import LeftContent from './LeftContent';
import CenterContent from './CenterContent'
import RightContent from './RightContent'
class Content extends React.Component {
    render() {
        return(
            <>
            <div className="content">
                <div className="left_content_main">
                    <LeftContent/>
                </div>
                <div className="center_content_main">
                    <CenterContent/>
                </div>
                <div className="right_content_main">
                    <RightContent/>
                </div>
            </div>
            </>
        )
    }
}

export default Content;