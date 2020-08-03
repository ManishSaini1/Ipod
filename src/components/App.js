import React from 'react';
import '../index.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="screen"></div>
        <div className="outer-wheel">
          <div className="inner-wheel"></div>
          <div className="forward white"><span><i className="fas fa-fast-forward"></i></span></div>
          {/* <div className="backward white"></div> */}
          {/* <div className="menu white">menu</div> */}
          {/* <div className="play-pause white">play-pause</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
