import React from 'react';
import './CenterContent.css';
import Feed from './Feed';

class CenterContent extends React.Component {
    render() {
        return(
            <div className="center_content">
                <Feed/>               
            </div>
        )
    }
}

export default CenterContent;