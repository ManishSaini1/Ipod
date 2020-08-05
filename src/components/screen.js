import React, { Component } from 'react'
import { Navbar, MenuContainer } from '.'

class screen extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {active , menuItems,songUrl}= this.props;
        return (
            <div className="screen">
                <Navbar />
                <MenuContainer  menuItems={menuItems} active={active} songUrl={songUrl}/>

                
            </div>
        )
    }
}

export default screen
