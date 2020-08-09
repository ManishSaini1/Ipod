import React from "react";
import "../index.css";
import { Wheel, Screen } from "./";

class Container extends React.Component {
  render() {
    const {
      active,
      menuItems,
      songUrl,
      updateActiveMenu,
      changeMenuForward,
      currentMenu,
      changeMenuBackward,
      musicItems,
    } = this.props;
    console.log("props", this.props);

    return (
      <div className="main-container">
        <Screen
          menuItems={menuItems}
          active={active}
          songUrl={songUrl}
          currentMenu={currentMenu}
          musicItems={musicItems}
        />
        <Wheel
          updateActiveMenu={updateActiveMenu}
          changeMenuForward={changeMenuForward}
          currentMenu={currentMenu}
          active={active}
          changeMenuBackward={changeMenuBackward}
        />
      </div>
    );
  }
}
export default Container;
