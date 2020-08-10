import React from "react";
import "../index.css";
import { Wheel, Screen } from "./";

class Container extends React.Component {
  render() {
    const {
      active,
      updateActiveMenu,
      currentMenu,
      changeMenuBackward,
      changeMenuForward,
      menuItems,
      musicItems,
      togglePlayPause,
      songItems,
      playing,
      songIndex,
      theme,
      audio,
      songUrl,
      songImgUrl,
      seekSongForward,
      seekSongReverse,
      wheelColor,
      wallpaper,
      wallpaperItems,
      noty,
      setNoty,
      notifyText,
      changeSongIfComplete
    } = this.props;

    console.log("props", this.props);

    return (
      <div className="main-container">
        <Screen
          songIndex={songIndex}
          playing={playing}
          active={active}
          musicItems={musicItems}
          menuItems={menuItems}
          currentMenu={currentMenu}
          songItems={songItems}
          audio={audio}
          songUrl={songUrl}
          songImgUrl={songImgUrl}
          wallpaper={wallpaper}
          wallpaperItems={wallpaperItems}
          noty={noty}
          setNoty={setNoty}
          notifyText={notifyText}
          seekSongForward={seekSongForward}
          changeSongIfComplete={changeSongIfComplete}
        />
        <Wheel
          updateActiveMenu={updateActiveMenu}
          changeMenuForward={changeMenuForward}
          currentMenu={currentMenu}
          active={active}
          togglePlayPause={togglePlayPause}
          changeMenuBackward={changeMenuBackward}
          seekSongReverse={seekSongReverse}
          seekSongForward={seekSongForward}
        />
      </div>
    );
  }
}
export default Container;
