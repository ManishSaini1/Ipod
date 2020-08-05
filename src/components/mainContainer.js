

import React from 'react';
import '../index.css';
import { Wheel, Screen } from './';

class Container extends React.Component {
 
render()
{
  const {active , menuItems,songUrl}= this.props;
  console.log("props", this.props);

  return(  
    <div className="main-container">
        <Screen  menuItems={menuItems} active={active} songUrl={songUrl}/>
         <Wheel />
      </div>
  )
}
}
export default Container;
