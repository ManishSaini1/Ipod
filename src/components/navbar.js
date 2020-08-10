import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull, faWifi,faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import playing from './playing';

class navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time:this.getCurrentTime(),
                 
        }
    }
    getCurrentTime=()=>
    {
        const today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        if (today.getMinutes() < 10) {
            time = today.getHours() + ":0" + today.getMinutes();
        }
        return time;
    }

    render() {
        const {time}= this.state;
        const {playing}=this.props;
        console.log("IN navbar playing", playing);
        return (
            <div  className="navbar">
                <div className="heading">Ipod
                <div className="wifi"> <FontAwesomeIcon icon={faWifi}/></div>
               </div>
                
                <div className='time'>{time}</div>
                <div className="play-battery">
            {playing ? <div className="nav-play-pause"><  FontAwesomeIcon icon={faPause} /></div> 
             :
             <div className="nav-play-pause"><  FontAwesomeIcon size="1x" icon={faPlay}/></div> }  
                <div className="full-battery"><FontAwesomeIcon icon={faBatteryFull}  color="green" /></div>
           </div>
            </div>
        )
    }
}

export default navbar
