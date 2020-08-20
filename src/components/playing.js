import React from "react";
import "../css/playing.css";

class playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      songRunning:true
    };
    this.intervalId = "";
  }

  // logic for updating the current music playbak
  componentDidMount() {
    
    const { audio,} = this.props;
    this.setState({ currentTime: audio.currentTime });
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: this.props.audio.currentTime });
    }, 100);
}
  // Clear interval for that same thing
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Render playing screen
  render() {
    const { songItems, playing, songIndex, audio, songImgUrl } = this.props;
    console.log("This current time", this.state.currentTime);
    // console.log("Song-imageUrl", songImgUrl);
    var currentTimeRender =
      Math.floor(this.state.currentTime / 60) +
      ":" +
      Math.floor(this.state.currentTime % 60);
     var audioD=Math.floor(audio.duration)%60;
      console.log("audio duration", audioD)
    var durationRender =
      Math.floor(audio.duration / 60) + ":" + (audioD<10 ? `0${audioD}`: (Math.floor(audio.duration % 60)))  ;
    const percentageComplete = {
      width: (this.state.currentTime / audio.duration) * 100 + "%",
    };
    console.log("Duraration Render",audio.duration);
    console.log("Percentage Complete",percentageComplete.width);
    
    if (durationRender === "NaN:NaN") {
      durationRender = "0:00";
    }
    if (Math.floor(this.state.currentTime % 60 < 10)) {
      currentTimeRender =
        Math.floor(this.state.currentTime / 60) +
        ":0" +
        Math.floor(this.state.currentTime % 60);
    }
    if(durationRender!=="NaN")
    {
        const finalTime=((durationRender/60)*60  + ((durationRender%60))  );   
        console.log("finalTime",finalTime);
    }
    return (
      <div className="now-playing-container">
        <div className="song-details">
          <img src={songImgUrl} alt="songImg"></img>
          <div>
            <h1>{songItems[songIndex]}</h1>
            {playing && <h5 className="play-pause-nav">Playing</h5>}
            {!playing && <h5 className="play-pause-nav">Paused</h5>}
          </div>
        </div>
        <div className="status">
          {currentTimeRender}
          <div id="progress">
            <div style={percentageComplete} id="progress-bar"></div>
          </div>
          {durationRender}
        </div>
      </div>
    );
  }
}

export default playing;
