import React, { Component } from "react";
import "../index.css";
import song2 from "../static/songs/Laung Gwacha.mp3";
import song1 from "../static/songs/Shape of you.mp3";
import song3 from "../static/songs/Let Me Love You.mp3";

import song2Img from "../static/images/laung_gwacha.jpg";
import song1Img from "../static/images/shape_of_you.png";
import song3Img from "../static/images/let_me.jpg";

import { Container } from "./index";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFastBackward, faFastForward,faPlay,faPause} from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: new Audio(song1),
      active: 0, //Active list item
      menuItems: ["Now Playing", "Music", "Games", "Settings"], //menu Items
      musicItems: ["All Songs", "Artist", "Albums"],
      songUrl: ["..", "...", ".."],
      navigationStack: [],
      playing: false,
      currentMenu: -2,
      songItemsUrl: [song1, song2, song3], //songs list
      songImgItemsUrl: [song1Img, song2Img, song3Img], //song images list
      songItems: ["Shape of You", "Laung Gwacha", "Let Me Love You"], //song names
      songUrl: song1,
      songIndex: 0,
      songImgUrl: song1Img,
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
    // FUNCTION FOR : ON LONG PRESS OF FORWARD BUTTON TRACKS ARE SEEKED BACKWARD
    seekSongReverse = (e) => {
      if (this.state.currentMenu === -2) {
        return;
      }
      if (this.state.playing === false) {
        return;
      }
      console.log(e.detail.interval);
      if (e.detail.interval < 250) {
        this.state.audio.pause();
        let songIndex = this.state.songIndex;
        if (songIndex === 0) {
          songIndex = this.state.songItemsUrl.length - 1;
        } else {
          songIndex--;
        }
        const songUrl = this.state.songItemsUrl[songIndex];
        const songImgUrl = this.state.songImgItemsUrl[songIndex];
        this.setState(
          {
            songIndex: songIndex,
            songImgUrl: songImgUrl,
            songUrl: songUrl,
            audio: new Audio(songUrl),
          },
          () => {
            this.state.audio.play();
          }
        );
      } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
        const interval = e.detail.interval / 100;
        this.setState((prevState) => {
          prevState.audio.currentTime -= interval;
          return prevState;
        });
      }
    };
  
   // FUNCTION FOR : CHANGE PLAYING MUSIC
   chagePlayingSongFromMusicMenu = (id, navigationStack) => {

    const songUrl = this.state.songItemsUrl[id];

    console.log("**********************************************************************************8");
    console.log("In changeplayinh function",songUrl);
    console.log("In changeplayinh function", this.state.songUrl);
    if(songUrl!=this.state.songUrl)
    { const songImgUrl = this.state.songImgItemsUrl[id];
      this.state.audio.pause();
      this.setState(
        {
          currentMenu: 7,
          songUrl: songUrl,
          navigationStack: navigationStack,
          active: 0,
          playing: true,
          songIndex: id,
          audio: new Audio(songUrl),
          songImgUrl: songImgUrl,
        },
        () => {
          this.state.audio.play();
        }
      );
      return;
    }
    else{
      this.setState({
        currentMenu:7,
      })
    }
   
    return;
  };
  changeMenuForward = (id, fromMenu) => {
    console.log("id in MEnu Forward", id);
    console.log("gromMenu  ", fromMenu);
    const navigationStack = this.state.navigationStack.slice();
    console.log(" IN APP1", id);
    console.log(" IN APP2", fromMenu);
    if (fromMenu == -2) {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: -1,
        navigationStack: navigationStack,
        active: 0,
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
        active: 0,
      });
      return;
    }

    if (fromMenu === 7 || fromMenu === 0) {
      this.togglePlayPause();
      return;
    }
    
    navigationStack.push(this.state.currentMenu);

    if (fromMenu === 4) {
      this.chagePlayingSongFromMusicMenu(id, navigationStack, fromMenu);
      return;
    }

    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({
      currentMenu: currentMenuID,
      navigationStack: navigationStack,
      active: 0,
    });
  };
  changeMenuBackward = () => {
    const navigationStack = this.state.navigationStack.slice();
    if (this.state.currentMenu == -2) {
      return;
    }
    const prevId = navigationStack.pop();
    this.setState({
      currentMenu: prevId,
      navigationStack: navigationStack,
      active: 0,
    });
  };
  //change song if song complete
  changeSongIfComplete =()=>
  {
    let songIndex= this.state.songIndex;
    if(songIndex=== this.state.songImgItemsUrl.length -1)
    {
      songIndex=0;
    }
    else{
      songIndex++;
    }
    const songUrl = this.state.songItemsUrl[songIndex];
    const songImgUrl = this.state.songImgItemsUrl[songIndex];
    this.setState(
      {
        songIndex: songIndex,
        songImgUrl: songImgUrl,
        songUrl: songUrl,
        audio: new Audio(songUrl),
      },
      () => {
        this.state.audio.play();
      }
    );
  }
  
  // FUNCTION FOR : ON LONG PRESS OF FORWARD BUTTON TRACKS ARE SEEKED FORWARD
  seekSongForward = (e) => {
    if(e=='x')
    {
      console.log("Details are undefined");
      return;
    }
    if (this.state.currentMenu === -2) {
      return;
    }
    if (this.state.playing === false) {
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.songItemsUrl.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];
      this.setState(
        {
          songIndex: songIndex,
          songImgUrl: songImgUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }
  };
  // FUNCTION FOR : TOGGLE SONG PLAY AND PAUSE
  togglePlayPause = () => {
    if (this.state.currentMenu === -2) {
      return;
    }
    if (this.state.playing === true) {
      this.setState({ playing: false });
      this.state.audio.pause();
    } else {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  };
  render() {
    const {
      menuItems,
      active,
      songUrl,
      currentMenu,
      musicItems,
      songItems,
      playing,
      songIndex,
      songImgUrl,
      audio,
  
    } = this.state;
    console.log("IN app and current Menu", currentMenu);
    console.log(" In app Component", menuItems);
    return (
      <div className="App">
        <Container
          audio={audio}
          songItems={songItems}
          playing={playing}
          togglePlayPause={this.togglePlayPause}
          songIndex={songIndex}
          songImgUrl={songImgUrl}
          menuItems={menuItems}
          active={active}
          songUrl={songUrl}
          updateActiveMenu={this.updateActiveMenu}
          changeMenuForward={this.changeMenuForward}
          currentMenu={currentMenu}
          changeMenuBackward={this.changeMenuBackward}
          musicItems={musicItems}
          songItems={songItems}
          seekSongReverse={this.seekSongReverse}
          seekSongForward={this.seekSongForward}
          changeSongIfComplete={this.changeSongIfComplete}
        />
      </div>
    );
  }
}

export default App;
