import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ZingTouch from 'zingtouch';
import { faFastBackward, faFastForward,faPlay,faPause} from '@fortawesome/free-solid-svg-icons'

class Wheel extends React.Component {
  componentDidMount() {
    var zt = new ZingTouch.Region(document.body);
    var playPause=document.getElementById("play");
    var wheel=document.getElementById("wheel");
    zt.bind(wheel,'rotate', function(e)
    {
      // console.log(e);
      console.log(" yes");
    })
    zt.bind(playPause,'tap', function(e)
    {
      console.log(" I am here");
    });
  }
  
 
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