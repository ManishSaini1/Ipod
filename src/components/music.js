import React, { Component } from "react";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { musicItems, active } = this.props;
    return (
      <div className="music-items">
        <h2>Music</h2>
        <ul>
          {musicItems.map((element, index) => {
            return active === index ? (
              <li key={index} className="active list-items ">
                &nbsp;{element}
              </li>
            ) : (
              <li className="list-items" key={index}>
                &nbsp;{element}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Music;
