import React, { Component } from "react";
import "../css/menu.css";
import nowPlaying from '../static/images/istImage.jpeg';
import games from '../static/images/games.jpeg';
import music from '../static/images/music.jpeg';
import setting from '../static/images/setting.jpeg';

class menuContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { active, menuItems, songUrl,changeMenuForward , currentMenu } = this.props;
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
        <div className="display-items">
          {active==0 && <img className="display-img" src={nowPlaying} />}
          {active==1 && <img className="display-img" src={music} />}
          {active==2 && <img className="display-img" src={games} />}
          {active==3 && <img className="display-img" src={setting} />}
        </div>
      </div>
    );
  }
}

export default menuContainer;
