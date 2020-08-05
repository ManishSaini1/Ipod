import React, { Component } from "react";
import "../css/menu.css";
class menuContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { active, menuItems, songUrl } = this.props;
    return (
      <div className="menu-container">
        <div className="menu-items">
          <div>
          <ul>
            {menuItems.map((element, index) => {
              return active === index ? (
                <li key={index} className="active list-items">
                  <span>{element}</span>
                </li>
              ) : (
                <li className="list-items" key={index}>
                  <span>{element}</span>
                </li>
              );
            })}
            
                 {/*       <span></span>
                       
                        <li><span>Music</span></li>
                        <li><span>Game</span></li>
                        <li><span>Settings</span></li>
                        */}
                    </ul> 
          </div>
        </div>
        <div className="display-items"></div>
      </div>
    );
  }
}

export default menuContainer;
