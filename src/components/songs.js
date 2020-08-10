import React, { Component } from 'react'

class songs extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {songItems, active} =this.props;
        console.log("MUSic props", this.prop);
        return (
            <div className="music-items">
            <h2>Music</h2>
            <ul>
              {songItems.map((element, index) => {
                return active === index ? (
                  <li key={index} className="active list-items ">
                    &nbsp;{element}
                  </li>
                ) : (
                  <li className="list-items" key={index}>
                    &nbsp;{element}
                  </li>
                );
              })}
            </ul>
          </div>
    
        )
    }
}

export default songs
