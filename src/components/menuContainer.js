import React, { Component } from 'react'
import '../css/menu.css'
class menuContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="menu-container">
                <div className="menu-items">
                    <div>
                    <ul>
                        <span></span>
                        <li><span>Now Playing</span></li>
                        <li><span>Music</span></li>
                        <li><span>Game</span></li>
                        <li><span>Settings</span></li>
                    </ul>
                    </div>
                </div>
                <div className="display-items"></div>
                
            </div>
        )
    }
}

export default menuContainer
