import React, { Component } from "react";
import { Navbar, MenuContainer, Music, LockScreen, Playing,Songs } from ".";
import "../css/lockScreen.css";
import "../css/playing.css";

class screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      active,
      menuItems,
      songImgUrl,
      audio,
      playing,
      songIndex,
      songItems,
      songUrl,
      seekSongForward,
      changeMenuForward,
      currentMenu,
      musicItems,
      changeSongIfComplete
    } = this.props;
    console.log(" IN Screen Component", currentMenu);
    return (
      <div className="screen">
        <Navbar  playing={playing}/>
        {currentMenu == -2 && <LockScreen></LockScreen>}
        {currentMenu == -1 && (
          <MenuContainer
            menuItems={menuItems}
            active={active}
            songUrl={songUrl}
            changeMenuForward={changeMenuForward}
            currentMenu={currentMenu}
          />
        )}

        {(currentMenu === 0 || currentMenu ==7) && (
          <Playing
            songImgUrl={songImgUrl}
            audio={audio}
            songUrl={songUrl}
            playing={playing}
            songIndex={songIndex}
            seekSongForward={seekSongForward}
            songItems={songItems}
            changeSongIfComplete={  changeSongIfComplete}
          />
        )}
        {currentMenu == 1 && <Music musicItems={musicItems} active={active} />}
        {currentMenu == 2 && <div className="blank-div"> Games</div>}
        {currentMenu == 3 && <div className="blank-div"> Setting</div>}
        {currentMenu ==4 && <Songs songItems={songItems} active={active} />}
        {currentMenu==5 && <div className="blank-div">Artist</div>}
        {currentMenu==6 && <div className="blank-div">Albums</div>}
      </div>
    );
  }
}

export default screen;
