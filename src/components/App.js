import React, { Component } from 'react'
import '../index.css';
import {Container} from './index';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFastBackward, faFastForward,faPlay,faPause} from '@fortawesome/free-solid-svg-icons'


 
 class App extends Component {
   constructor(props) {
     super(props)
     this.state = {
      active: 0,  //Active list item
      menuItems: ["Now Playing", "Music", "Games", "Settings"], //menu Items
        songUrl:["..", "...", ".."]   
  }
   }
   componentDidMount() {
     this.setState({
       active:1,
     })
   }
   
  
 
   render() {
     const {menuItems, active, songUrl}= this.state;
     console.log(" In app Component", menuItems)
     return (
      <div className="App">
      <Container  menuItems={menuItems} active={active} songUrl={songUrl} />
    </div>
         
       
     )
   }
 }
 
 export default App
 
