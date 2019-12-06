import React, { useState } from 'react';
import $ from 'jquery';
import {ParallaxContainer} from './Components/Parallax'
import GroupOne from './Components/GroupOne'
import GroupTwo from './Components/GroupTwo'
import GroupThree from './Components/GroupThree'

function App() {

  const [scrollTop, setScroll] = useState(0);
  const debugOn = () => {
    $('.parallax__group').toggleClass('group-debug')
  };

  const handleScroll = (event) => {
    setScroll(event.target.scrollTop)
    event.stopPropagation()
  }

  return (
    <ParallaxContainer onScroll= {handleScroll}>
      <button className="thebutton" onClick={debugOn}>debug</button>
      <GroupOne scrollTop={scrollTop}/>
      <GroupTwo/>
      <GroupThree/>
    </ParallaxContainer>
  );
}

export default App;
