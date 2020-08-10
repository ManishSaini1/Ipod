import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ZingTouch from "zingtouch";
import {
  faFastBackward,
  faFastForward,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

class Wheel extends React.Component {
  constructor() {
    super();

    this.angle = 0;
  }
  componentDidMount() {
    const {
      togglePlayPause,
      active,
      changeMenuBackward,
      seekSongReverse,
      seekSongForward,
    } = this.props;
    console.log("IN wheel .js file", this.props); 
    var zt = new ZingTouch.Region(document.body);
    var playPause = document.getElementById("play");
    var wheel = document.getElementById("wheel");
    const menu = document.getElementById("menu");
    const smallWheel = document.getElementById("small-wheel");
    var backward = document.getElementById("backward");
    var forward = document.getElementById("forward");
    const longTapGesture = new ZingTouch.Tap({
      maxDelay: 10000,
      numInputs: 1,
      tolerance: 1,
    });

    zt.bind(backward, longTapGesture, function (e) {
      seekSongReverse(e);
    });
    zt.bind(forward, longTapGesture, function (e) {
      seekSongForward(e);
    });
    const wheelContorll = this.wheelControll;
    zt.bind(wheel, "rotate", function (e) {
      wheelContorll(e);
      // console.log(e);
    });
    zt.bind(playPause, "tap", function (e) {
      console.log(" I am here togglePlay Pause");
      togglePlayPause();
    });
    zt.bind(smallWheel, "tap", function (e) {
      console.log(
        "********************************************************",
        active
      );
      // changeMenuForward(active ,currentMenu);
    });
    zt.bind(menu, "tap", function (e) {
      changeMenuBackward();
    });
  }
  wheelControll = (e) => {
    const { updateActiveMenu, currentMenu, active } = this.props;
    console.log("In wheel Rootation active", active);
    // console.log("UpdateActive Menu",updateActiveMenu);

    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        // updateActiveMenu(1, currentMenu);
        updateActiveMenu(1, currentMenu);
      } else {
        // updateActiveMenu(0, currentMenu);
        updateActiveMenu(0, currentMenu);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        // updateActiveMenu(1, currentMenu);
        updateActiveMenu(1, currentMenu);
      } else {
        // updateActiveMenu(0, currentMenu);
        updateActiveMenu(0, currentMenu);
      }
    }
  };

  render() {
    const { changeMenuForward, active, currentMenu } = this.props;
    return (
      <div className="outer-wheel" id="wheel">
        <div className="forward white absolute" id="forward">
          <FontAwesomeIcon icon={faFastForward} color="white" />
        </div>
        <div className="backward white absolute" id="backward">
          <FontAwesomeIcon icon={faFastBackward} color="white" />
        </div>
        <div className="menu white absolute" id="menu">
          Menu
        </div>
        <div className="play-pause white absolute" id="play">
          <FontAwesomeIcon icon={faPlay} color="white" />
          <FontAwesomeIcon icon={faPause} color="white" />
        </div>
        <div
          id="small-wheel"
          onClick={() => {
            changeMenuForward(active, currentMenu);
          }}
        ></div>
      </div>
    );
  }
}
export default Wheel;
