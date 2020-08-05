import React, { Component } from 'react'
import { Navbar, MenuContainer } from '.'

class screen extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="screen">
                <Navbar />
                <MenuContainer />

                
            </div>
        )
    }
}

export default screen
