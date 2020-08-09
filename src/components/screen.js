import React, { Component } from "react";
import { Navbar, MenuContainer,Music ,LockScreen} from ".";
import '../css/lockScreen.css'

class screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { active, menuItems, songUrl, changeMenuForward , currentMenu, musicItems}  = this.props;
    console.log(" IN Screen Component", currentMenu);
    return (
      <div className="screen">
        <Navbar />
        {currentMenu==-2 && <LockScreen></LockScreen>}
        {currentMenu ==-1 &&
        <MenuContainer
          menuItems={menuItems}
          active={active}
          songUrl={songUrl}
          changeMenuForward={changeMenuForward}
          currentMenu={currentMenu}
        />}
          
        { currentMenu===0 &&  <div className="blank-div"> Love</div>}  
       { currentMenu==1 &&  <Music  musicItems={musicItems} active={active}/>}
       { currentMenu==2 &&  <div className="blank-div"> Games</div>}
       { currentMenu==3 &&  <div className="blank-div"> Setting</div>}
      </div>
    );
  }
}

export default screen;
