import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ZingTouch from 'zingtouch';
import { faFastBackward, faFastForward,faPlay,faPause} from '@fortawesome/free-solid-svg-icons'

class Wheel extends React.Component {
  constructor()
  {
    super();
    this.state=({
      angle:0
    })
  }
  componentDidMount() {
    var zt = new ZingTouch.Region(document.body);
    var playPause=document.getElementById("play");
    var wheel=document.getElementById("wheel");
    const wheelContorll=this.wheelContorll;
    zt.bind(wheel,'rotate', function(e)
    {
      wheelContorll(e);
      // console.log(e);
      
    })
    zt.bind(playPause,'tap', function(e)
    {
      console.log(" I am here");
    });
  }
  wheelControll = (e) => {
    const { updateActiveMenu, currentMenu } = this.props;
    const {angle} = this.state;

    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        updateActiveMenu(1, currentMenu);
      } else {
        updateActiveMenu(0, currentMenu);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        updateActiveMenu(1, currentMenu);
      } else {
        updateActiveMenu(0, currentMenu);
      }
    }
  };
 
render()
{
  return(
    <div className="outer-wheel" id="wheel">

    <div className="forward white absolute"><  FontAwesomeIcon icon={faFastForward} color="white" /></div>
      <div className="backward white absolute"><  FontAwesomeIcon icon={faFastBackward} color="white" /></div>
    <div className="menu white absolute">Menu</div>
    <div className="play-pause white absolute" id="play"><  FontAwesomeIcon icon={faPlay} color="white" /><  FontAwesomeIcon icon={faPause} color="white" /></div>
  </div>

  )
}
}
export default Wheel;