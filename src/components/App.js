import React, { Component } from "react";
import "../index.css";
import { Container } from "./index";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFastBackward, faFastForward,faPlay,faPause} from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0, //Active list item
      menuItems: ["Now Playing", "Music", "Games", "Settings"], //menu Items
      musicItems: ["All Songs", "Artist", "Albums"], 
      songUrl: ["..", "...", ".."],
      navigationStack: [],
      currentMenu: -2, 
      lengthMenuKey: { "-1": 3, 1: 2, 4: 2, 8: 4, 3: 2, 9: 3, 10: 2 }, //length of a particular menu
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, 
    };
  }
  // componentDidMount() {
  //   this.setState({
  //     active: 0,
  //     currentMenu:-2
  //   });
  // }
  updateActiveMenu = (direction, menu) => {
    // if (
    //   menu !== -1 &&
    //   menu !== 1 &&
    //   menu !== 4 &&
    //   menu !== 8 &&
    //   menu !== 3 &&
    //   menu !== 9 &&
    //   menu !== 10
    // ) {
    //   return;
    // }
    let min = 0;
    let max = 3;

    max = this.state.lengthMenuKey[menu];

    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min });
      } else {
        this.setState({ active: this.state.active + 1 });
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max });
      } else {
        this.setState({ active: this.state.active - 1 });
      }
    }
  };
  changeMenuForward = (id, fromMenu) => {
    console.log("id in MEnu Forward" ,id);
    console.log("gromMenu  " ,fromMenu);
    const navigationStack = this.state.navigationStack.slice();
    console.log(" IN APP1", id);
    console.log(" IN APP2", fromMenu);
    if(fromMenu==-2)
    {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: -1,
        navigationStack: navigationStack,
        active: 0 ,
      });
      // console.log("in Menu Forward", this.state);
      return;
    }
    if (fromMenu === -1) {
      console.log("in Menu Forward -1", this.state);
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: id,
        navigationStack: navigationStack,
        active: 0 ,
      });
      return;
    } else if (id === 1) {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: id,
        navigationStack: navigationStack,
        active: 0,
      });
    } else if (id === 2) {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: id,
        navigationStack: navigationStack,
        active: 0,
      });
    } else if (id == 3) {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: id,
        navigationStack: navigationStack,
        active: 0,
      });
    } else {
      return;
    }
  };
  changeMenuBackward=()=>
  {
    const navigationStack = this.state.navigationStack.slice();
    if(this.state.currentMenu==-2)
    {
      return;
    }
    const prevId=navigationStack.pop();
    this.setState(
      {
        currentMenu: prevId,
        navigationStack:navigationStack,
        active:0
      }
    )
  
  }

  render() {
    const { menuItems, active, songUrl, currentMenu ,musicItems} = this.state;
    console.log( "IN app and current Menu", currentMenu);
    console.log(" In app Component", menuItems);
    return (
      <div className="App">
        <Container
          menuItems={menuItems}
          active={active}
          songUrl={songUrl}
          updateActiveMenu={this.updateActiveMenu}
          changeMenuForward={this.changeMenuForward}
          currentMenu={currentMenu}
          changeMenuBackward={this.changeMenuBackward}
          musicItems={musicItems}
        />
      </div>
    );
  }
}

export default App;
