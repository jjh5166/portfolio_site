import React, { useRef} from 'react';
import $ from 'jquery';
import {ParallaxContainer} from './Components/Parallax'
import GroupOne from './Components/GroupOne'
import GroupTwo from './Components/GroupTwo'
import GroupThree from './Components/GroupThree'
function App() {
  const group2 = useRef(null);
  const waves = useRef(null); //ref to wave layer not set
  const debugOn = () => {
    $('.parallax__group').toggleClass('group-debug')
  };

  const handleScroll = (event) => {
    let scroller = event.target.scrollTop
    let opac = 'rgba(130,50,75, ' + Math.min(1, ((.002 * scroller) + .4)) + ')';
    $('.darken').css('background-color', opac)
    event.stopPropagation()
  }

  return (

      <ParallaxContainer onScroll= {handleScroll}>
        <button className="thebutton" onClick={debugOn}>debug</button>
        <GroupOne nextRef={group2}/>
        <GroupTwo ref={group2} fordwardRef={waves}/>
        <GroupThree/>
      </ParallaxContainer>

  );
}

export default App;
