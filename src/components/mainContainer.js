

import React from 'react';
import '../index.css';
import { Wheel, Screen } from './';

class Container extends React.Component {
 
render()
{
  return(
     
    <div className="main-container">
        <Screen />
         <Wheel />
      </div>
  )
}
}
export default Container;
